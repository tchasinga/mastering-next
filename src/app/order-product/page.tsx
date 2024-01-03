'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function OrderProduct() {
  
    const router = useRouter()
    const handlerClick = () =>{
        router.push('/login')
        console.log('the order i successfully')
    }

  return (
    <div className='max-w-6xl mx-auto'>
        <h1>Order your elements</h1>
        <button onClick={handlerClick} className='bg-red-600 text-white p-3 rounded-lg'>Please order</button>
    </div>
  )
}
