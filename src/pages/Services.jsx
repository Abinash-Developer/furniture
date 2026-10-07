import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Choose from "../components/services/Choose";
import Products from "../components/services/Products";
const Services = ()=>{
    const pageProp = {title:"Services",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",button:true,furniture:false};
    return(<>
    <Navbar/>
    <Hero {...pageProp}/>
    <Choose/>
    <Products/>
    <Footer/>
    </>);
}
export default Services;