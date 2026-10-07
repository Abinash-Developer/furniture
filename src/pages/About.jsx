import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Whychoose from "../components/Whychoose";
import Team from "../components/about/Team";
const About = ()=>{
    const pageProp = {title:"About Us",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",button:true,furniture:true};
    return(<>
    <Navbar/>
    <Hero {...pageProp}/>
    <Whychoose/>
    <Team/>
    <Footer/>   
    </>);
}
export default About;