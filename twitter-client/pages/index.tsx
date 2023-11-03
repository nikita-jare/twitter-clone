import React from 'react'
import Image from 'next/image'
import {FaXTwitter} from 'react-icons/fa6'
import {GoHomeFill} from 'react-icons/go'
import {BiSearch} from 'react-icons/bi'
import {RiNotificationLine} from 'react-icons/ri'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {TbNotes} from 'react-icons/tb'
import {PiBookmarkSimpleBold, PiDotsThreeCircle} from 'react-icons/pi'
import {IoPeopleOutline, IoPersonOutline} from 'react-icons/io5'
import FeedCard from '@/components/FeedCard'

interface TwitterSidebarButton{
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <GoHomeFill/>,
  },
  {
    title: 'Explore',
    icon: <BiSearch/>,
  },
  {
    title: 'Notifications',
    icon: <RiNotificationLine/>,
  },
  {
    title: 'Messages',
    icon: <HiOutlineEnvelope/>,
  },
  {
    title: 'Lists',
    icon: <TbNotes/>,
  },
  {
    title: 'Bookmarks',
    icon: <PiBookmarkSimpleBold/>,
  },
  {
    title: 'Communities',
    icon: <IoPeopleOutline/>,
  },
  {
    title: 'Premium',
    icon: <FaXTwitter/>,
  },
  {
    title: 'Profile',
    icon: <IoPersonOutline/>,
  },
  {
    title: 'More',
    icon: <PiDotsThreeCircle/>,
  },
  
]

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-20'>
        <div className='col-span-3 pt-3 ml-8'>
          <div className='text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all'>
          <FaXTwitter/>
          </div>
          <div className='mt-3 text-xl'>
            <ul>
              {sideBarMenuItems.map((item) => (
              <li 
                className='flex justify-normal mb-1 items-center gap-4 hover:bg-gray-800 rounded-full p-2 pr-6 h-fit w-fit cursor-pointer transition-all' 
              >
                <span className='text-2xl'>{item.icon}</span>
                <span>{item.title}</span>
              </li>
              ))}
            </ul>
            <div className='mt-1 pr-12'>
            <button className='bg-[#1d9bf0] p-3 rounded-full w-full'>
              Post
            </button>
            </div>
          </div>
        </div>
        <div className='col-span-6 border-r-[0.5px] border-l-[0.5px] border-slate-600'>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className='col-span-3'></div>
      </div>
    </div>
  )
}
