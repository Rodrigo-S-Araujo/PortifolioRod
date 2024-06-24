import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Footer from "./Componentes/Footer";
import SobreMIm from "./Paginas/SobreMim";
import NaoEncontrada from "./Paginas/NaoEncontrado";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobremim" element={<SobreMIm />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
