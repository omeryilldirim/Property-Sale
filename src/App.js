import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Agents from './pages/Agents';
import Pricing from './pages/Pricing';
import Partners from './pages/Partners';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import ContactUs from './pages/ContactUs';
import BuyAds from './pages/BuyAds';
import Profile from './pages/Profile';
import LogOut from './pages/LogOut';


function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to={'/home'}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/partners' element={<Partners />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/support' element={<Support />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/buyads' element={<BuyAds />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<LogOut />} />
          </Routes>
        </Router>
        <ToastContainer />
    </div>
  );
}

export default App;
