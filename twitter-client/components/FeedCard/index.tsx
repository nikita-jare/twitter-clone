import React from 'react'
import Image from 'next/image'
import { BiBarChart, BiMessageRounded } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa6'
import {AiOutlineHeart} from 'react-icons/ai'
import { PiBookmarkSimpleBold } from 'react-icons/pi'
import {FiShare} from 'react-icons/fi'

const FeedCard : React.FC = () => {
    return <div className='border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all'>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-1'>
                <Image 
                src="https://avatars.githubusercontent.com/u/106905968?v=4/" 
                alt="user-image" 
                height={40} 
                width={40}
                className='rounded-full'
                />
            </div>
            <div className='col-span-11'>
                <div className='flex'>
                    <h5>Nikita Jare</h5>
                    <h5 className='pl-1 text-sm text-slate-500'>@nikitajare</h5>
                </div>
                <p>I’m starting a small club of 5 ML engineers. 
We’ll e-meet once a week and run projects together. 
* Python (PyTorch), C++/Rust
* Linear Algebra and Calculus

It’ll be fun, I’ll try. 🙄
Indicate interest in reply.</p>
                <div className='flex justify-between mt-2 text-xl text-slate-500 items-center'>
                    <div>
                        <BiMessageRounded/>
                    </div>
                    <div>
                        <FaRetweet/>
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <BiBarChart/>
                    </div>
                    <div className='flex'>
                        <PiBookmarkSimpleBold/>
                        <div className='pl-4'>
                            <FiShare/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard