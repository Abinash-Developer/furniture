import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/home/Products";
import Whychoose from "../components/Whychoose";
import Help from "../components/home/Help";
import Popularproducts from "../components/home/Popularproducts";
import Blog from "../components/home/Blog";
const Home = () =>{
    return(<>
        <Navbar />
        <Hero />
        <Products />
        <Whychoose />
        <Help />
        <Popularproducts />
        <Blog />
        <Footer />
    </>)
}
export default Home;