
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import { AuthProvider, useAuth } from './authContext';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
