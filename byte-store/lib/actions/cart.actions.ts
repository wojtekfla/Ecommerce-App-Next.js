'use server'

import { cookies } from 'next/headers'
import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache' 
import { AddToCartInput, CartSummary, DatabaseCart, CartItem } from '@/lib/cart.types'

function calculateCartSummary(items: any[]): CartSummary {
  const itemsPrice = items.reduce((total, item) => {
    return total + (Number(item.product?.price || item.price) * item.quantity)
  }, 0)
  const shippingPrice = itemsPrice > 100 ? 0 : 15 // Free shipping over $100
  const totalPrice = itemsPrice + shippingPrice
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return {
    totalItems,
    itemsPrice: Math.round(itemsPrice * 100) / 100,
    shippingPrice,
    totalPrice: Math.round(totalPrice * 100) / 100
  }
}

// Get current user's cart (guest or logged in)
export async function getMyCart(): Promise<DatabaseCart | null> {
  try {
    const session = await auth()
    const userId = session?.user?.id ? parseInt(session.user.id) : null
    
    const cookieStore = await cookies()
    const sessionCartId = cookieStore.get('sessionCartId')?.value
    
    if (!sessionCartId) return null
    
    // Smart lookup: userId first, fallback to sessionCartId
    const cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { sessionCartId },
      include: {
        items: {
          include: {
            product: true,
            stock: true
          }
        }
      }
    })
    
    return cart as DatabaseCart | null
    
  } catch (error) {
    console.error('Error getting cart:', error)
    // If database not ready, return null (fallback to Zustand)
    return null
  }
}

// 🔄 Sync Zustand cart to database  
export async function syncCartToDatabase(items: CartItem[]) {
  try {
    const session = await auth()
    const userId = session?.user?.id ? parseInt(session.user.id) : null
    
    const cookieStore = await cookies()
    const sessionCartId = cookieStore.get('sessionCartId')?.value
    
    if (!sessionCartId) return { success: false, message: 'No session found' }
    
    // Get or create cart
    let cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { sessionCartId }
    })
    
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId,
          sessionCartId
        }
      })
    }
    
    // Clear existing items
    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id }
    })
    
    // Add new items
    for (const item of items) {
      // Find matching stock by product and categoryId
      const stock = await prisma.stock.findFirst({
        where: { 
          productId: item.id,
          // Map categoryId to color or use first available
        }
      })
      
      if (stock) {
        await prisma.cartItem.create({
          data: {
            cartId: cart.id,
            productId: item.id,
            stockId: stock.id,
            quantity: item.quantity,
            selected: item.selected
          }
        })
      }
    }
    
    revalidatePath('/cart')
    return { success: true, message: 'Cart synced to database' }
    
  } catch (error) {
    console.error('Sync cart error:', error)
    return { success: false, message: 'Failed to sync cart' }
  }
}

// Load cart from database to Zustand format
export async function loadCartFromDatabase(): Promise<CartItem[]> {
  try {
    const cart = await getMyCart()
    
    if (!cart || cart.items.length === 0) return []
    
    // Convert to Zustand format
    const zustandItems: CartItem[] = cart.items.map(item => ({
      id: item.productId,
      name: item.product.name,
      price: Number(item.product.price),
      image: item.product.imageUrl,
      quantity: item.quantity,
      selected: item.selected,
      categoryId: item.product.categoryId,
      stock: item.stock.amount
    }))
    
    return zustandItems
    
  } catch (error) {
    console.error('Load cart error:', error)
    return []
  }
}

// Add item to cart (database)
export async function addItemToCart(input: AddToCartInput) {
  try {
    const session = await auth()
    const userId = session?.user?.id ? parseInt(session.user.id) : null
    
    const cookieStore = await cookies()
    const sessionCartId = cookieStore.get('sessionCartId')?.value
    
    if (!sessionCartId) {
      return { success: false, message: 'Session not found' }
    }
    
    // Verify product and stock exist
    const product = await prisma.product.findUnique({
      where: { id: input.productId }
    })
    
    const stock = await prisma.stock.findUnique({
      where: { id: input.stockId }
    })
    
    if (!product || !stock) {
      return { success: false, message: 'Product or stock not found' }
    }
    
    if (stock.amount < input.quantity) {
      return { success: false, message: 'Not enough stock available' }
    }
    
    // Get or create cart
    let cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { sessionCartId }
    })
    
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId,
          sessionCartId
        }
      })
    }
    
    // Check if item already in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId_stockId: {
          cartId: cart.id,
          productId: input.productId,
          stockId: input.stockId
        }
      }
    })
    
    if (existingItem) {
      // Update quantity
      const newQuantity = existingItem.quantity + input.quantity
      
      if (stock.amount < newQuantity) {
        return { success: false, message: 'Not enough stock available' }
      }
      
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: newQuantity }
      })
    } else {
      // Create new cart item
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: input.productId,
          stockId: input.stockId,
          quantity: input.quantity
        }
      })
    }
    
    revalidatePath('/cart')
    revalidatePath(`/products/${input.productId}`)
    
    return { 
      success: true, 
      message: `${product.name} added to cart` 
    }
    
  } catch (error) {
    console.error('Add to cart error:', error)
    return { success: false, message: 'Failed to add item to cart' }
  }
}

// Merge guest cart with user cart on login
export async function mergeGuestCartWithUser(userId: number) {
  try {
    const cookieStore = await cookies()
    const sessionCartId = cookieStore.get('sessionCartId')?.value
    
    if (!sessionCartId) return
    
    const guestCart = await prisma.cart.findUnique({
      where: { sessionCartId },
      include: { items: true }
    })
    
    if (!guestCart || guestCart.items.length === 0) return
    
    // Delete existing user cart
    await prisma.cart.deleteMany({
      where: { userId }
    })
    
    // Convert guest cart to user cart
    await prisma.cart.update({
      where: { id: guestCart.id },
      data: { userId }
    })
    
    revalidatePath('/cart')
    
  } catch (error) {
    console.error('Merge cart error:', error)
  }
}

// Get cart summary
export async function getCartSummary(): Promise<CartSummary> {
  const cart = await getMyCart()
  
  if (!cart || cart.items.length === 0) {
    return {
      totalItems: 0,
      totalPrice: 0,
      itemsPrice: 0,
      shippingPrice: 0
    }
  }
  
  return calculateCartSummary(cart.items)
}

// Clear cart
export async function clearCart() {
  try {
    const cart = await getMyCart()
    if (!cart) return { success: false, message: 'Cart not found' }
    
    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id }
    })
    
    revalidatePath('/cart')
    
    return { success: true, message: 'Cart cleared' }
    
  } catch (error) {
    console.error('Clear cart error:', error)
    return { success: false, message: 'Failed to clear cart' }
  }
}