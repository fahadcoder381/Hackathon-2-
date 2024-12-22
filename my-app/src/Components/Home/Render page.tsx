import Footer from "../Footer/Footer";
import Navbar from "../Navber/Nav";
import BlogsPage from "./Blogs";
import FeaturedProducts from "./Features prodcut";
import HeroBanner from "./Hero section";
import InstagramSection from "./Instagramcontant";
import LargeImageSection from "./New Arrivals";
import NextTopPicks from "./Toppicks";


export default function HomeRender() {
 return (
        <div>
            <Navbar className="bg-[#FBEBB5]  " />
            <HeroBanner />
            <FeaturedProducts />
            <NextTopPicks />
            <LargeImageSection />
            <BlogsPage />
            <InstagramSection />
            <Footer />
        </div>
    )
}