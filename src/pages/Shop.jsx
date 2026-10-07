import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Productlist from "../components/shop/Productlist";
const Shop = ()=>{
    const pageProp = {title:"Shop"};
    return (<>
    <Navbar/>
    <Hero {...pageProp}/>
    <Productlist/>
    <Footer/>
    </>);
}
export default Shop;