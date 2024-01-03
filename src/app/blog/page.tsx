import React from 'react'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'Blogs',
}

export default function Blogs() {
  return (
    <div className='max-w-6xl mx-auto'>
         <h1> this is my blogs components</h1>
    </div>
  )
}