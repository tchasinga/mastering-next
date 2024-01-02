import React from 'react'
import {notFound} from "next/navigation"

export default function Reviews({params} : {
    params: {
        productId: string
        reviewId: string
    }
}) {
   if(parseInt(params.reviewId) > 1000){
        return notFound()
   }
  return (
    <div className='max-w-6xl mx-auto'>
        <h1>Review code {params.reviewId} for {params.productId} </h1>
    </div>
  )
}
