import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Location from './pages/Location';
// import Login from './pages/Login';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <Router>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </CartProvider>
    </Router>
  )
}

export default App;
