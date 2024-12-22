import ContactHeader from '@/Components/Contact/Headersceond'
import ContactPage from '@/Components/Contact/herosection'

import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navber/Nav'
import FeaturesSection from '@/Components/Shop/TopFooter'
import React from 'react'

const Contactsection = () => {
  return (
    <div>
        <Navbar />
        <ContactHeader />
        <ContactPage />
        <FeaturesSection />
        <Footer />

    </div>
  )
}

export default Contactsection