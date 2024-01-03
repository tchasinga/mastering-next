import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Next.js is great as frontend code",
    template : "%s | Learnign",
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <header className='mybg p-4'>
        <Link href='/'><p className='cursor-pointer'>Header</p></Link>
        </header>
        {children}
        <footer className='foot p-4'>
           <p>Footer</p>
        </footer>
        </body>
    </html>
  )
}
