import Footer from '@/Components/Footer/Footer'
import AccountPage from '@/Components/My Account/Headersecond'
import AccountHero from '@/Components/My Account/Hero contant'
import Navbar from '@/Components/Navber/Nav'
import FeaturesSection from '@/Components/Shop/TopFooter'
import React from 'react'

const Myaccountpage = () => {
  return (
    <div>
        <Navbar />
        <AccountPage />
        <AccountHero />
        <FeaturesSection />
        <Footer />
    </div>
  )
}

export default Myaccountpage