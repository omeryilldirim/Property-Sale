import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, blueGrey } from "@mui/material/colors";
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


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Navigate to={'/home'}/>} />
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
            
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
