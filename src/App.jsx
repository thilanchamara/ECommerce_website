import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonals from './components/Testimonals/Testimonals'
import Footer from './components/Footer/Footer'

const App = () => {

  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    Aos.refresh();
  },[])
  return (
    <div className>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonals/>
      <Footer/>
      </div>
  )
}

export default App