"use client"
import React from 'react'
import { useSession } from '@/lib/auth-client'
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';
import DashboardStats from '@/components/dashboard/DashboardStats';

const RecruiterDashboardPage = () => {
  
  const {data: session, isPending} = useSession()
  if(isPending) {
    return <div className="text-center flex justify-center">Loading...</div>
  }
  const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];
  
  const user = session?.user
  
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome back, {user?.name}</h1>
      <DashboardStats statsData={recruiterStats} />
    </div>
  )
}

export default RecruiterDashboardPage