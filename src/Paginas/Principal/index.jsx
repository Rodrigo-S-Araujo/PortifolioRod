import styled from "styled-components";
import Cover from "../../Componentes/Cover";
import BarraMenus from "../../Componentes/BarraMenus";
import EstilosGlobais from "../../Componentes/EstilosGlobais";
import ContainerPortifolio from "../../Componentes/Portifolio";
import Habilidades from "../../Componentes/Habilidades";
import CursosCertificados from "../../Componentes/CursosCertificados";
import Noticias from "../../Componentes/NoticiasMaterias";
import IconesRedesSociais from "../../Componentes/IconesRedesSociais";

const BackgroudEstilizado = styled.div`
  background-color: #232323;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 20px;
`;

const Principal = () => {
  return (
    <>
      <BackgroudEstilizado>
        <EstilosGlobais />
        <Cover />
        <BarraMenus />
        <ContainerPortifolio />
        <Habilidades />
        <CursosCertificados />
        <Noticias />
      </BackgroudEstilizado>
    </>
  );
};

export default Principal;
