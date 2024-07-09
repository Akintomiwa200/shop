import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ProductDisplay from '../components/ProductDisplay'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
      <Header />
      <Hero />
      <Banner />
      <ProductDisplay/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home