import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './components/Login';
import { Toaster } from 'sonner';
import PublicRoutes from './PublicRoutes';
function App() {
  return (
    <>
    <Toaster position="top-right" richColors />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
