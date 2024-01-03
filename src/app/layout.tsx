import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js is great as frontend code",
    template : "",
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
           <p>Header</p>
        </header>
        {children}
        <footer className='foot p-4'>
           <p>Footer</p>
        </footer>
        </body>
    </html>
  )
}
