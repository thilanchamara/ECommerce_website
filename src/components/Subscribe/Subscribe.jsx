import React from 'react'
import BagImg from '../../assets/orangeBackground.jpg'


const Subscribe = () => {
    const backgroundImg={
        backgroundImage:`url(${BagImg})`,
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        height:'100%',
        width:'100%'
    }
  return (
    <div 
    data-aos="zoom-in"
    className=' dark:bg-gray-800'
    style={backgroundImg}
    >
        <div className=' container backdrop-blur-sm  py-10  '>
            <div className=' max-w-xl  mx-auto space-y-6 ' data-aos='fade-up'>
                 <h1 className=' text-2xl font-bold text-center text-white'>Get Notified About New Products</h1>
                 <input 
                 type='text' 
                 placeholder=' Enter your email'
                 className=' w-full p-3 focus:outline-none'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe