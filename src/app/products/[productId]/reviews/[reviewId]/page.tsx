import React from 'react'

export default function Reviews({params} : {
    params: {
        productId: string
        reviewId: string
    }
}) {
  return (
    <div className='max-w-6xl mx-auto'>
        <h1>Review code {params.reviewId} for {params.productId} </h1>
    </div>
  )
}
