
import React from 'react'
import Header2 from '../components/prod/Header2'
import ProductTemplate from '../components/products/ProductTemplate';
import Testimonial from '../components/home/Testimonial';
import Footer from '../components/home/Footer';
import Banner from '../components/prod/Banner';




const Product = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                 <Header2 />
            <div className='flex flex-col w-[90vw] justify-center items-center m-0 p-0'>
                <h2 className="text-2xl font-bold my-6">All Products </h2>
                <div className="flex flex-col  justify-center p-4 lg:p-8">
                   <ProductTemplate/> 
                </div>
            </div>
            <div className='w-[80vw] border-t-4'></div>
            <Banner />
            <Testimonial />
            <Footer />
            </div>
        </>
    )
}


export default Product