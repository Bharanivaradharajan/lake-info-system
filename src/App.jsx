import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import ContactPage from "./pages/ContactPage";
import LakeDetailsPage from "./pages/LakeDetailsPage";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/lake/:id" element={<LakeDetailsPage />} />

        



      </Routes>
    </BrowserRouter>
  );
}
