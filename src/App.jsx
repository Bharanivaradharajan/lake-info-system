import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/contact" element={<ContactPage />} />


      </Routes>
    </BrowserRouter>
  );
}
