import Card from '@/components/cards'
import React from 'react'
import Link from 'next/link'

export default function Notication() {
  return (
    <Card>
        <h1>Notification page...</h1>
        <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  )
}
