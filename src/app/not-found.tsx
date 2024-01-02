import React from 'react'
import Link from 'next/link'

export default function notFound() {
  return (
    <div className='max-w-6xl mx-auto'>
         <h1>404 THIS PAGE IS UNFOUND</h1>
            <Link href="/" className='cursor-pointer'>
            <p className='cursor-pointer'>please go back the home page</p>
            </Link>
    </div>
  )
}



