
import Hero from "@/Components/Checkout/buy"
import CheckoutHeader from "@/Components/Checkout/Headersceond"
import Footer from "@/Components/Footer/Footer"
import Navbar from "@/Components/Navber/Nav"
import FeaturesSection from "@/Components/Shop/TopFooter"


const Checkoutpage = () => {
  return (
    <div>
        <Navbar />
        <CheckoutHeader />
        <Hero/>
        <FeaturesSection />
        <Footer />


    </div>
  )
}

export default Checkoutpage