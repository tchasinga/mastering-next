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
    <h1>{children}</h1>
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>{notification}</div>
    </div>
  </div>
  )
}
