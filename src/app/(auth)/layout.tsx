"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navLinks = [
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
  {name : 'Forgot Password', href: '/forget-password'}
]
export default function AuthLayout({
    children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <div className='max-w-6xl mx-auto'>
      <div className="flex gap-3 mt-[10%]">
      {navLinks.map((links) =>{
        const isActive = pathname.startsWith(links.href)
        return (
          <Link href={links.href} className={isActive ? "font-bold mr-3" : "text-blue-600 mr-3"} key={links.name}>
            <p className='cursor-pointer'>{links.name}</p>
          </Link>
        )
      })}
      </div>
      <div className='flex flex-col justify-center items-center my-[5%]'>
        <div className=''>
          {children}
        </div>
        </div>
    </div>
  )
}
