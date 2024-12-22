import React from 'react'
import Navbar from '../Navber/Nav'
import ShopPage from './second Nav'
import FilterAndSortSection from './Filter'
import Hero2section from './Hero'
import FeaturesSection from './TopFooter'
import Footer from '../Footer/Footer'



const ShopRender = () => {
  return (
    <div>
        <Navbar />
        <ShopPage />
        <FilterAndSortSection />
        <Hero2section />
        <FeaturesSection />
        <Footer />       

    </div>
  )
}

export default ShopRender