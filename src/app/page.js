"use client"

import Image from 'next/image'
import CredDashboard from './allpages/credDashboard/page'
import Header from './allpages/header/page'
import SideBar from './allpages/sideBar/page'

export default function Home() {
  return (
   <div className='flex'>
    {/* <div className='flex-1'> */}
 
    {/* </div> */}
    <CredDashboard />
   </div>
  )
}
