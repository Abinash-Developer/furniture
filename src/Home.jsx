import Hero from "./components/Hero";
import Products from "./components/Products";
import Choose from "./home/Choose";
import Help from "./home/Help";
import PopularProduct from "./components/PopularProduct";
const Home = ()=>{
    return(<>
    <Hero/>
    <Products/>
    <Choose/>
    <Help/>
    <PopularProduct/>
    </>);
}
export default Home;