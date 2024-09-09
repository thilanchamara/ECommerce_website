import React from 'react'
import { FaStar } from 'react-icons/fa6';
import Img1 from '../../assets/shoping_girl1.png'

const Products = () => {
    const ProductsData=[
        {
            id:'1',
            img:Img1,
            title:'Women Ethnic',
            rating:'5.0',
            color:"white",
            aosDelay:"0"
        },
        {
            id:'2',
            img:Img1,
            title:'Women western',
            rating:'4.5',
            color:"Red",
            aosDelay:"200"
        },
        {
            id:'3',
            img:Img1,
            title:'Goggles',
            rating:'4.7',
            color:"Brown",
            aosDelay:"400"
        },
        {
            id:'4',
            img:Img1,
            title:'Printed T-shirt',
            rating:'4.4',
            color:"Yellow",
            aosDelay:"600"
        },
        {
            id:'5',
            img:Img1,
            title:'Women Ethnic',
            rating:'5.0',
            color:"white",
            aosDelay:"800"
        },

    ]
  return (
    <div className=' dark:bg-gray-900 dark:text-white pt-12'>
        <div className=' container'>
            {/* Header section */}
            <div className='  text-center '>
                <p className=' text-md text-primary'
                data-aos="fade-up"
                >Top selling Products for you</p>
                <h1 className='text-3xl font-bold '
                data-aos='fade-up'
                >Products</h1>
                <p className=' text-xs ' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.Sit asperiores modi
                </p>
            </div>
            <div className=' mt-10'>
                <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
                        {ProductsData.map((item)=>
                        <div key={item.id}
                        data-aos="fade-up"
                        data-aos-delay={item.aosDelay}
                        >
                            <img src={Img1} alt="" className=' w-[200px] h-[150px] object-cover rounded-md'/>
                            <h3 className=' font-semibold'>{item.title}</h3>
                            <p className=' text-sm'>{item.color}</p>
                            <div className=' flex gap-2 items-center'>
                                <FaStar className=' text-yellow-300'/>
                                <span>{item.rating}</span>
                            </div>
                            
                        </div>)}
                </div>
            </div>
            <div className=' mt-10 text-center'>
                <button className=' bg-primary py-1 px-4 text-white rounded-md '>View All Products</button>
            </div>
        </div>
    </div>
  )
}

export default Products