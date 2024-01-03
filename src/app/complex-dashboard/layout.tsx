import React from 'react'
import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/RevenueMetrics";
import Notifications from "@/components/Notifications";


export default function layout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <div>{children}</div>
            <UserAnalytics />
            <RevenueMetrics />
            <Notifications />
    </div>
  )
}
