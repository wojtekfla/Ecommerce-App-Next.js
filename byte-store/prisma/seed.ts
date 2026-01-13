import { PrismaClient } from '@prisma/client'
import { hashPassword } from '@/lib/passwordHasher'
import { mockProducts, mockCategories, brandNames } from '@/components/product/mockData'
import { nanoid } from 'nanoid'

const prisma = new PrismaClient()

async function main() {
  console.log ('Starting database seeding ...')

  try {
    console.log('cleaning existing data ...')
    await prisma.address.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.stock.deleteMany()
    await prisma.product.deleteMany()
    await prisma.user.deleteMany()
    await prisma.category.deleteMany()
    await prisma.brand.deleteMany()

    console.log('Seeding categories')

    for (const category of mockCategories) {
      if (category.id === 'all') continue;

      await prisma.category.create({
        data: {
          id: category.id,
          name: category.name,
          description: category.description,
          image: category.image,
          exploreInfo: category.exploreInfo
        }
      })
    }

    console.log('Seeding brands ...')
    const brandMappings: Record<string, string> = {};

    for (const brandName of brandNames) {
      const createdBrand = await prisma.brand.create({
        data: {
          id: `brand-${brandName.toLowerCase().replace(/\s+/g, '-')}`,
          name: brandName,
          description: `${brandName}`,
          logoUrl: null // uzupełnić
        }
      })

      brandMappings[brandName] = createdBrand.id
    }

    console.log('Seeding users ...')
    const hashedPassword = await hashPassword('Test!123')

    const testUser = await prisma.user.create({
      data: {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        mobileNumber: '48123456789',
        passwordHash: hashedPassword,
        country: 'Poland'
      }
    })

    console.log('Seeding addresses ...')

    await prisma.address.create({
      data: {
        userId: testUser.id,
        street: 'Grunwaldzka 1',
        city: 'Wrocław',
        state: 'Dolnośląskie',
        postCode: '00-001',
        country: 'Poland'
      }
    })

    console.log('Seeding products ...')

    for (const mockProduct of mockProducts) {
      let brandId = brandMappings['Rexus']; // domyślny

      for (const brandName of brandNames) {
        if (mockProduct.name.toLowerCase().includes(brandName.toLowerCase())) {
          brandId = brandMappings[brandName]
          break;
        }
      }

      const categoryId = mockProduct.categoryId

      if (!mockCategories.find(cat => cat.id === categoryId)) {
        console.warn(` Category '${mockProduct.categoryId}' not found for product '${mockProduct.name}' `)
        continue;
      }

      const createdProduct = await prisma.product.create({
        data: {
          id: nanoid(12),
          name: mockProduct.name,
          description: mockProduct.description,
          price: mockProduct.price,
          originalPrice: mockProduct.originalPrice,
          imageUrl: mockProduct.imageUrl,
          images: mockProduct.images || [],
          categoryId: categoryId,
          brandId: brandId,
          rating: mockProduct.rating || 0.0
        }
      })

      await prisma.stock.create({
        data: {
          id: nanoid(10),
          productId: createdProduct.id,
          color: 'black',
          amount: mockProduct.stock
        }
      })
    }

    console.log('Database seeding completed successfully');

    const verification = {
      brands: await prisma.brand.count(),
      categories: await prisma.category.count(),
      users: await prisma.user.count(),
      addresses: await prisma.address.count(),
      products: await prisma.product.count(),
      stocks: await prisma.stock.count()
    }

    console.log('Verification counts: ', verification)
    console.log('All mockData have been imported')

  } catch (error) {
    console.error('Error during seeding: ', error)

    if (error instanceof Error) {
      console.error('Error message: ', error.message)
    }
    throw error;
    
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error('Seeding process failed: ', e)
    process.exit(1)
  })
