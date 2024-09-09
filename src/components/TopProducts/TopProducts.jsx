import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Tshirt from '../../assets/tshirt.png'
import WhiteTshirt from '../../assets/white-tshirt.png'

const TopProducts = () => {
    const productItems=[
        {
            id:'1',
            name:'casuwal wear',
            image:WhiteTshirt,
            about:"Lorem ipsum dolor sit amet consectetur,adipisicing elit"
        },
        {
            id:'2',
            name:'casuwal wear',
            image:WhiteTshirt,
            about:"Lorem ipsum dolor sit amet consectetur,adipisicing elit"
        },
        {
            id:'3',
            name:'casuwal wear',
            image:WhiteTshirt,
            about:"Lorem ipsum dolor sit amet consectetur,adipisicing elit"
        },
    ]
  return (
    <div className=' dark:bg-gray-900 dark:text-white pt-12 '>
        <div className=' container '>
            {/* heading */}
            <div className=' '>
                <p className=' text-sm text-primary' data-aos='fade-up'>Trending products</p>
                <h1 className=' text-3xl font-bold' data-aos='fade-up'>Top Rated Products</h1>
                <p className='text-xs' data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.Sit asperiores modi</p>
            </div>
            {/* card section */}
            <div className=' mt-32'>
                <div className=' grid grid-cols-1 md:grid-cols-3  gap-20 md:gap-5 '>
                    {productItems.map((item)=>
                    <div className=' shadow-xl pt-1 max-w-[300px] rounded-2xl group hover:bg-black/80 dark:bg-gray-800 dark:hover:bg-primary'
                        data-aos='zoom-in' key={item.id}>
                        {/* image section */}
                        <div className=' h-[100px] '>
                            <img src={item.image} alt=""
                                className=' w-[140px] block object-cover mx-auto group-hover:scale-105 -translate-y-20'
                            />
                        </div>
                        {/* text section */}
                        <div className=' text-center p-4 '>
                            <div className=' flex gap-2 justify-center items-center'>
                                <FaStar className=' text-yellow-300'/>
                                <FaStar className=' text-yellow-300'/>
                                <FaStar className=' text-yellow-300'/>
                                <FaStar className=' text-yellow-300'/>
                            </div>
                            <h1 className=' text-xl font-bold '>{item.name}</h1>
                            <p className=' text-xs group-hover:text-white text-gray-500 '>{item.about}</p>
                            <button className='bg-primary text-white group-hover:bg-white group-hover:text-primary py-1 px-4 rounded-full mt-2 hover:scale-105 '>Order Now</button>
                        </div>

                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProducts