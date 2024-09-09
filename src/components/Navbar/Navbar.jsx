import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
    const menu=[
        {
            id:'1',
            name:'Home',
            link:'/#'
        },
        {
            id:'2',
            name:'Top Rated',
            link:'/#'
        },
        {
            id:'3',
            name:'Kids Wear',
            link:'/#'
        },
        {
            id:'4',
            name:'Mens Wear',
            link:'/#'
        },
        {
            id:'5',
            name:'Electronics',
            link:'/#'
        }
    ]  
    const dropDownMenu=[
        {
            id:'1',
            name:'Trending Products',
            link:'/#'
        },
        {
            id:'2',
            name:'Best selling',
            link:'/#'
        },
        {
            id:'3',
            name:'Top Rated',
            link:'/#'
        },
    ] 
  return (
    <div className=' shadow-md  dark:bg-gray-900 dark:text-white duration-200 '> 
        {/* upper Navbar */}
        <div className=' py-2 bg-primary/40'>
            <div className=' flex justify-between container items-center'>
                <div>
                    <a href='#' className=' font-bold text-2xl sm:text-3xl uppercase flex gap-2'>
                        <img src={Logo} alt='logo image' className=' w-10'/>
                        shopsy 
                    </a>
                </div>
                
                <div className=' flex gap-4 items-center'>
                    {/* search bar */}
                    <div className=' group relative  hidden sm:block'>
                        <input type='text' placeholder='search' 
                        className=' w-[200px] border border-gray-300 group-hover:w-[300px] px-2 py-1 focus:outline-none focus:border-primary duration-300 transition-all rounded-full dark:bg-gray-800 dark:border-gray-500'/>
                        <IoMdSearch className=' text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2'/>
                    </div>
                    {/* order button */}
                    <button className=' group bg-primary rounded-full py-1 px-4 flex items-center gap-2'
                        onClick={()=>alert('ordering not available yet')}
                    >
                        <span className=' hidden text-white group-hover:block duration-300'>order</span>
                        <FaCartShopping className=' text-white'/>
                    </button>
                    {/* Dark mode button */}
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
        {/* Lower Navbar */}
        <div>
            <ul className=' sm:flex gap-4 justify-center hidden items-center py-1'>
                {menu.map((item)=>
                <li key={item.id} className=' cursor-pointer'>
                    <a href={item.link} className=' hover:text-primary'>{item.name}</a>
                </li>
                )}
                {/* simple Dropdown and Links */}
                <li className=' group relative'>
                    <a href='#' className=' flex items-center'>
                        Trending Products
                        <span>
                            <MdOutlineArrowDropDown className=' group hover:rotate-180'/>
                        </span>
                    </a>
                    <div className=' absolute z-[9999] hidden group-hover:block p-2 w-[150px] bg-white text-black rounded-md shadow-md'>
                        <ul>
                            {dropDownMenu.map((item)=>
                                <li key={item.id} className=' hover:bg-primary/20 w-full rounded-md p-2'>
                                    <a href={item.link} className=''>{item.name}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar