import React from 'react'

export default function layout({
    children,
    users,
    notification,
    revenue,
}: {
  children: React.ReactNode,
  users: React.ReactNode,
  notification: React.ReactNode,
  revenue: React.ReactNode,
}) {
  return (
    <div>
        <div>{children}</div>

    </div>
  )
}
