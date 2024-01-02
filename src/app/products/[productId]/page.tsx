import React from 'react'

export default function ProductID({params}: {params: {productId: string}}) {
  return (
    <div className='max-w-6xl mx-auto'>
        <h1>Details pages {params.productId}</h1>
    </div>
  )
}
