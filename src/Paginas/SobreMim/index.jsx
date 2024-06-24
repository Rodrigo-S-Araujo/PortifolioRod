import styled from "styled-components";
import MenuLateral from "../../Componentes/MenuLateral";
import EstilosGlobais from "../../Componentes/EstilosGlobais";
import ConteudoSobreMim from "../../Componentes/ConteudoSobreMim/indes";

const ContainerSobreMim = styled.section`
  display: flex;
  min-height: 90vh;
  background-color: #505050;

  p {
    text-align: justify;
    text-indent: 1.5rem;
  }
`;
const SobreMIm = () => {
  return (
    <>
      <EstilosGlobais />
      <ContainerSobreMim>
        <MenuLateral />
        <ConteudoSobreMim />
      </ContainerSobreMim>
    </>
  );
};

export default SobreMIm;
