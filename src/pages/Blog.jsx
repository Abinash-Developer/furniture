import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Blogs from "../components/blog/Blogs";
const Blog = () => {
    const pageProp = {title:"Blog",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",button:true,furniture:false};
    return(<>
        <Navbar />
        <Hero {...pageProp} />
        <Blogs />
        <Footer />
    </>)
}
export default Blog;