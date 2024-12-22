import Cartpage from '@/Components/Cart/Cartpage'
import CartHeader from '@/Components/Cart/Secondpage'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navber/Nav'
import FeaturesSection from '@/Components/Shop/TopFooter'
import React from 'react'

const CartHomepage = () => {
  return (
    <div>
        <Navbar />
        <CartHeader />
        <Cartpage />
        <FeaturesSection />
        <Footer />
    </div>
  )
}

export default CartHomepage