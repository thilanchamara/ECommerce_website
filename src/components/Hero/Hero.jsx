import React from 'react'
import Image1 from '../../assets/shoping_girl1.png'
import Slider from "react-slick"


const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
   slidesToScroll: 1,
   slidesToShow: 1, 
  };
  
  const imageList=[
    {
      id:'1',
      img:Image1,
      title:"upto 50% off on all Men's wear",
      description:
      "lorem His life will forever be changed dolor sit GiAmethyst,consectetur adipiscing elit.sed do eisumod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      id:'2',
      img:Image1,
      title:"upto 50% off on all Men's wear",
      description:
      "lorem His life will forever be changed dolor sit GiAmethyst,consectetur adipiscing elit.sed do eisumod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      id:'3',
      img:Image1,
      title:"upto 50% off on all Men's wear",
      description:
      "lorem His life will forever be changed dolor sit GiAmethyst,consectetur adipiscing elit.sed do eisumod tempor incididunt ut labore et dolore magna aliqua"
    }
  ]
  return (
    <div className=' relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-slate-200  
    flex items-center justify-center dark:bg-gray-900 dark:text-white'>
        {/* background pattern */}
        <div className=' w-[700px] h-[700px] bg-primary/40 rotate-45 rounded-3xl absolute  -top-1/2  right-0'></div> 
        {/* hero section */}
        <div className=' container pb-8 sm:pb-0 h-full '>
          <Slider {...settings}>
            {imageList.map(item=>
              <div key={item.id}>
                <div className=' grid grid-cols-1 sm:grid-cols-2'>
                    {/* text section */}
                    
                    
                        <div className=' flex flex-col justify-center gap-4 items-center 
                              pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 className=' text-5xl font-bold'
                              data-aos='zoom-out'
                              data-aos-duration='500'
                              data-aos-once='true'
                            >{item.title}</h1>
                            <p className=' text-sm'
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay='100'
                            >{item.description}
                            </p>
                            <div>
                              <button className=' px-4 py-2 text-white rounded-full bg-primary hover:scale-105'>Order Now</button>
                            </div>
                            {/* image section */}
                        </div>
                        <div className=' sm:order-2 order-1 relative z-10'>
                          <div >
                            <img src={Image1} alt=''
                                  className=' w-[300px] h-[300px] sm:w-[450px]  object-contain mx-auto sm:scale-125'
                                  data-aos="zoom-in" data-aos-once="true"
                                />
                          </div>
                        </div>
                    
                    </div>
              </div>
            )}
          </Slider>
        </div>
        
    </div>
  )
}

export default Hero