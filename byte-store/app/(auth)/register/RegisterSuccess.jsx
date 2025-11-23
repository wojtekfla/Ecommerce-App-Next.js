'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const RegisterSuccess = () => {
  const router = useRouter()


  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 3000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-4 text-center bg-[var(--color-black-one)] text-[var(--color-white-one)]'>
      <Image 
        src="/icons/bytestore.svg"
        alt="Success Icon"
        width={64}
        height={64}
        className="mb-6 text-green-500"
      />
      <h1 className='text-2xl font-bold mb-2'>Thank you!</h1>
      <p className='mb-4 text-[var(--color-grey-two)]'>You have successfully registered</p>

      <p className='text-sm max-w-md mb-2 text-[var(--color-grey-two)]'>
        Please check your email for further information. Let's explore our products and enjoy many gifts.
      </p>

      <p className='text-sm'>
        Having a problem?{" "}
        <span className='text-[var(--color-orange-one)] cursor-pointer'>Contact us</span>
      </p>
    </section>
  )
}

export default RegisterSuccess