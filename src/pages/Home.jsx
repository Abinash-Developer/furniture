import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/home/Products";
import Whychoose from "../components/Whychoose";
import Help from "../components/home/Help";
import Popularproducts from "../components/home/Popularproducts";
import Blog from "../components/home/Blog";
const Home = () =>{
    const pageProp = {title:"Modern Interior",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",button:true,furniture:true};
    return(<>
        <Navbar />
        <Hero {...pageProp}/>
        <Products />
        <Whychoose />
        <Help />
        <Popularproducts />
        <Blog />
        <Footer />
    </>)
}
export default Home;