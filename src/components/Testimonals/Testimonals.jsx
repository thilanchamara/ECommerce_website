import React from 'react'
import Testi1 from '../../assets/testi1.jpeg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {
    var settings = {
        dots: true, // Option to show dots for navigation
        infinite: true, // Infinite loop for the slider
        speed: 500, // Animation speed in milliseconds
        slidesToScroll: 1, // Scroll one slide at a time
        slidesToShow: 3, // Show three slides at a time
        responsive: [ // Responsive settings for different screen sizes
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show two slides at a time for medium screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show one slide at a time for small screens
                    slidesToScroll: 1
                }
            }
        ]
    };
    const testimonalData=[
        {
            id:1,
            name:'Victor',
            text:"Lorem ipsum dolor sit amet consectetur,adipisicing elit",
            image:Testi1
        },
        {
            id:2,
            name:'Satya Nadella',
            text:"Lorem ipsum dolor sit amet consectetur,adipisicing elit",
            image:Testi1
        },
        {
            id:3,
            name:'Virat Kohli',
            text:"Lorem ipsum dolor sit amet consectetur,adipisicing elit",
            image:Testi1

        }
    ]
  return (
    <div className=' dark:bg-gray-900 dark:text-white pt-12 pb-12 '>
        <div className=' container '>
            {/* Header section */}
            <div className=' text-center'>
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
            {/* Testimonal cards */}
            <div className=' w-full text-center mt-10' data-aos='zoom-in'>
            <Slider {...settings} >
                
                    
                    {testimonalData.map((data)=>
                        
                        <div className=' shadow-xl dark:bg-gray-800 bg-primary/10 p-3 rounded-2xl max-w-[300px] mx-auto relative'
                        key={data.id}>
                            
                            <div className=' flex justify-center items-center'>
                                <img
                                    src={data.image}
                                    className=' w-20 h-20 rounded-full object-cover' 
                                />
                            </div>
                            <div className=' mt-5 flex flex-col relative '>
                                
                                <p className=' text-xs text-gray-500 dark:text-white'>{data.text}</p>
                                <h1 className=' text-xl text-black/80 dark:text-white '> {data.name}</h1>
                                
                            </div>
                            <p className='text-9xl font-serif text-black/20 absolute right-0 top-1/4'>"</p>

                        </div>
                    
                    )}
                    
               
                </Slider>
           </div>
 
        </div>
    </div>
  )
}

export default Testimonals