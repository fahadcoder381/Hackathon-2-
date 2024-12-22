import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navber/Nav'
import SectionTwoPage from '@/Components/Single Product/Heroproductpage'
import { Descriptionpage } from '@/Components/Single Product/prodcutcardDec'
import RelatedProducts from '@/Components/Single Product/Related Products'
import PageLayout from '@/Components/Single Product/SecondHeader'
import React from 'react'

const Prodcutcard = () => {
  return (
    <div>
        <Navbar />
        <PageLayout />
        <SectionTwoPage />
        <Descriptionpage />
        
        <RelatedProducts />
        <Footer />
    </div>
  )
}

export default Prodcutcard