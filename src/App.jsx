import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LakeDetailsPage from "./pages/LakeDetailsPage";





export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/lakes/:uqcode" element={<LakeDetailsPage />} />
         <Route path="/about" element={<AboutPage />} />
         

        



      </Routes>
    </BrowserRouter>
  );
}
