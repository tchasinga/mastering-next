import Link from 'next/link'
import React from 'react'

export default function F1() {
  return (
    <div className='max-w-6xl mx-auto'>
        <h1>this is folder one</h1>
        <div className="">
          <Link href='/f1/f2'>Go to F2</Link>
        </div>
    </div>
  )
}
