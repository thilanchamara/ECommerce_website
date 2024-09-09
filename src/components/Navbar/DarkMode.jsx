import React from 'react'
import Lightmodeicon from '../../assets/lightmodeicon.png'
import Darkmodeicon from '../../assets/darkmodeicon.png'

import { useState, useEffect } from 'react';


const DarkMode=()=>{

    const [isDarkMode,setIsDarkMode]=useState(false);

    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.add('dark');
        }
        else{
            document.body.classList.remove('dark');
        }
    },[isDarkMode])
    
    return(
        <div className=' relative'>
            {!isDarkMode ?
            <img src={Lightmodeicon} alt='Light mode'onClick={()=>setIsDarkMode(!isDarkMode)} 
            className=' cursor-pointer'/> :
            <img src={Darkmodeicon} alt='Dark mode'onClick={()=>setIsDarkMode(!isDarkMode)} className=' cursor-pointer'/>
            }
        </div>
    )
}




export default DarkMode;