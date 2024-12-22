import BlogHeader from '@/Components/Blog/Headerblog'
import Blogpage from '@/Components/Blog/Hero'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navber/Nav'
import FeaturesSection from '@/Components/Shop/TopFooter'
import React from 'react'

const BlogHome = () => {
  return (
    <div>
        <div>
        <Navbar />
        <BlogHeader />
        <Blogpage />
        <FeaturesSection/>
        <Footer />
       
       </div>
     </div>
  )
}

export default  BlogHome