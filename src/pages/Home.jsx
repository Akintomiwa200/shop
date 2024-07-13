import React from 'react'
//import Header from '../components/prod/Header2'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Banner from '../components/home/Banner'
import ProductDisplay from '../components/home/ProductDisplay'
import Testimonial from '../components/home/Testimonial'
import Footer from '../components/home/Footer'



const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
      <Header />
      <Hero />
      <Banner />
      <ProductDisplay />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home