import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Footer from "./Componentes/Footer";
import SobreMIm from "./Paginas/SobreMim";
import NaoEncontrada from "./Paginas/NaoEncontrado";
import Apresentacao from "./Paginas/Apresentacao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobremim" element={<SobreMIm />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
