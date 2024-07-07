import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ProductDisplay from '../components/ProductDisplay'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
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