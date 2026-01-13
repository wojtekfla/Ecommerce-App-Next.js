// order actions from AI

'use server'

import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { nanoid } from 'nanoid'

export async function createOrder(checkoutData) {
  try {
    const session = await auth()
    if (!session) {
      return { success: false, message: 'Not authenticated' }
    }
    
    const userId = parseInt(session.user.id)
    const { cartId, address, paymentMethod, shippingMethod } = checkoutData
    
    // Get cart with items
    const cart = await prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: { product: true }
        }
      }
    })
    
    if (!cart || cart.items.length === 0) {
      return { success: false, message: 'Cart is empty' }
    }
    
    // Calculate total
    const itemsTotal = cart.items.reduce((sum, item) => 
      sum + (Number(item.product.price) * item.quantity), 0
    )
    const shippingPrice = 5
    const serviceFee = 0.5
    const totalAmount = itemsTotal + shippingPrice + serviceFee
    
    // Create order
    const order = await prisma.order.create({
      data: {
        orderNumber: `INV${Date.now()}/${nanoid(8).toUpperCase()}`,
        userId,
        totalAmount,
        status: 'PENDING',
        paymentMethod,
        shippingMethod
      }
    })
    
    // Create order items
    for (const cartItem of cart.items) {
      await prisma.orderItem.create({
        data: {
          id: nanoid(12),
          orderId: order.id,
          productId: cartItem.productId,
          stockId: cartItem.stockId,
          quantity: cartItem.quantity,
          priceAtPurchase: cartItem.product.price
        }
      })
    }
    
    // Clear cart
    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id }
    })
    
    return { 
      success: true, 
      orderId: order.id,
      orderNumber: order.orderNumber 
    }
    
  } catch (error) {
    console.error('Create order error:', error)
    return { success: false, message: 'Failed to create order' }
  }
}