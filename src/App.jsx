
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Things from "./pages/Things";
import Socials from "./pages/Socials";
import Products from "./pages/Products";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/things" element={<Things />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/products" element={<Products />} />
        <Route path="/info" element={<AboutUs />} />
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
