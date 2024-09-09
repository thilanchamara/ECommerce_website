import React from 'react'
import Logo from '../../assets/logo.png'
import FooterBackground from '../../assets/footerBackground.jpg'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt
} from 'react-icons/fa'

const Footer = () => {
    const footerImg={
        backgroundImage:`url(${FooterBackground})`,
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        height:'100%',
        width:'100%'
    }
    const footerLinks=[
        {
            id:1,
            title:'Home',
            link:'/#'
        },
        {
            id:2,
            title:'About',
            link:'/about'
        },
        {
            id:3,
            title:'contact',
            link:'/contact'
        },
        {
            id:4,
            title:'blog',
            link:'/blog'
        }
    ]

  return (
    <div style={footerImg}>
        <div className=' container'>
            <div className=' grid md:grid-cols-3 gap-4 text-white py-8' data-aos='zoom-in'>
                {/* company details */}
                <div className=' '>
                    <div className=' flex gap-2'>
                        <img
                            src={Logo}
                            className=' max-w-[50px]'
                        />
                        <h1 className=' text-xl'>Shopsy</h1>
                    </div>
                    <p className=' text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quam placeat doloremque iste,
                     deserunt delectus minus ipsum, amet voluptatem esse similique atque necessitatibus! 
                     Quo officiis eos, dolores provident officia facere.</p>
                </div>
                {/* footer links */}
                <div className=' grid grid-cols-2  '>
                    <div className=' '>
                        <h1 className=' text-xl font-bold mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {footerLinks.map((link)=>
                                <li key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className=' '>
                        <h1 className=' text-xl font-bold mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {footerLinks.map((link)=>
                                <li key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                {/* social links */}
                <div className=' flex flex-col  gap-3'>
                    <div className=' flex text-3xl gap-3'>
                        <a href='#'><FaFacebook/></a>
                        <a href='#'><FaInstagram/></a>
                        <a href='#'><FaLinkedin/></a>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <div className=' flex gap-3 items-center'>
                            <FaLocationArrow />
                            <p>Matale,Srilanka</p>
                        </div>
                        <div className=' flex gap-3 items-center'>
                            <FaMobileAlt />
                            <p>+94775925062</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer