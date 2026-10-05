import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from './pages/About';
import Services from './pages/Services';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Home />
    </>
  );
}

export default App;
