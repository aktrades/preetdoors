import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Layout from "./layout/Layout.jsx";
import Products from "./pages/Products/Products.jsx";
import OurProjects from "./pages/OurProjects/OurProjects.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />  
          <Route path="/products" element={<Products />} /> 
          <Route path="/ourprojects" element={<OurProjects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
