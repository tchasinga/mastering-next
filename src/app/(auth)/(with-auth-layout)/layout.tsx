import React from 'react'

export default function AuthLayout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='max-w-6xl mx-auto'>
        <h1>Inner coding</h1>
        {children} 
    </div>
  )
}
