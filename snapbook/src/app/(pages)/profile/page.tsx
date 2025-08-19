import React from 'react'
import AppLayout from "@/components/AppLayout";
import ProfileHeader from '@/components/ProfileHeader';
import ProfileTabs from '@/components/ProfileTabs';
const page = () => {
  return (
    <AppLayout>
        <div className="max-w-6xl mx-auto">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </AppLayout>
  )
}

export default page