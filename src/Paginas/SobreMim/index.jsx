import styled from "styled-components";
import MenuLateral from "../../Componentes/MenuLateral";
import EstilosGlobais from "../../Componentes/EstilosGlobais";
import BotaoMenuSobreMim from "../../Componentes/BotaoMenuSobremim";

const ContainerSobreMim = styled.section`
  display: flex;
  height: 100vh;
  background-color: #505050;
`;
const SobreMIm = () => {
  return (
    <>
      <EstilosGlobais />
      <ContainerSobreMim>
        <MenuLateral />
      </ContainerSobreMim>
    </>
  );
};

export default SobreMIm;
