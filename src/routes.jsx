import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Footer from "./Componentes/Footer";
import SobreMIm from "./Paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobremim" element={<SobreMIm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
