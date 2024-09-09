import React from 'react'
import Image1 from '../../assets/shoping_girl1.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white pt-20 pb-20'>
        <div className=' container  '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 '>
                {/* image section */}
                <div className='' data-aos='zoom-in'>
                  <img
                    src={Image1}
                    alt=''
                    className=' max-w-[400px] h-[350px] w-full object-cover  mx-auto
                     drop-shadow-[-10px_-10px_12px_rgba(0,0,0,1)]'
                  />                  
                </div>
                {/* text section */}
                <div className=' mx-auto' data-aos='fade-up'>
                    <h1 className=' text-3xl font-bold'>Winter sale up to 50% off</h1>
                    <p className=' text-sm text-gray-500 my-2'>Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.Sit asperiores modi</p>
                    <div className=' flex flex-col gap-3' >
                      <div className=' flex gap-3 items-center'>
                        <div className=' rounded-full p-2 bg-violet-100 dark:text-black'>
                          <GrSecure/>
                        </div>
                        <h3>Quality Products</h3>
                      </div>
                      <div className=' flex gap-3 items-center'>
                        <div className=' rounded-full p-2 bg-orange-100 dark:text-black'>
                          <IoFastFood/>
                        </div>
                        <h3>Fast Delivery</h3>
                      </div>
                      <div className=' flex gap-3 items-center'>
                        <div className=' rounded-full p-2 bg-yellow-100 dark:text-black'>
                          <GiFoodTruck/>
                        </div>
                        <h3>Easy Delivery Methods</h3>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner