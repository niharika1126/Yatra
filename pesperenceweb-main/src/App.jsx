import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import LoginRegister from "./pages/LoginRegister"; // ✅ Corrected import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Partner from "./pages/Partner";
import Diwali from "./pages/Diwali";
import Cart from './pages/Cart';
import Check from './pages/Check'
import ReligiousTours from './pages/ReligiousTours';
import VarnasiActivity from './pages/VarnasiActivity';
import KashiActivity from './pages/KashiActivity';
function NotFound() {
  return (
    <h1 className="text-center text-red-600 text-3xl mt-10">
      404 - Page Not Found
    </h1>
  );
}

function App() {
  return (
    <Router>
      <div className="w-screen h-screen scrollbar-hide">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginregister" element={<LoginRegister />} /> {/* ✅ Working route */}
           <Route path="/partner" element={<Partner />} /> {/* ✅ Working route */}
          <Route path="/diwali" element={<Diwali />} />
          <Route path="/cart" element={<Cart />} />
          <Route path ="/checkout" element ={<Check/>} />
          <Route path ="/religioustours" element ={<ReligiousTours/>} />
          <Route path="/varnasiactivity" element ={<VarnasiActivity/>}/>
          <Route path="/kashiactivity" element ={<KashiActivity/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
