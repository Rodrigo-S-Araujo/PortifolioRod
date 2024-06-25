import styled from "styled-components";
import imgErro404 from "./erro404.png";
import EstilosGlobais from "../../Componentes/EstilosGlobais";
import BotaoVoltar from "../../Componentes/BotaoVoltar";

const ContainerNaoEncontrada = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--cor-bg-secundaria);
  min-height: 96vh;
  img {
    max-width: 70vw;
    height: auto;
    @media (min-width: 760px) and (max-width: 1200px) {
      max-width: 40vw;
    }
    @media (min-width: 1201px) {
      max-width: 20vw;
    }
  }
`;

const NaoEncontrada = () => {
  return (
    <ContainerNaoEncontrada>
      <EstilosGlobais />
      <img
        src={imgErro404}
        alt="Personagem segurando um mapa com aspecto de perdido"
      />
      <h2> Erro 404!</h2>
      <h3> Pagina não encontrada.</h3>
      <BotaoVoltar />
    </ContainerNaoEncontrada>
  );
};

export default NaoEncontrada;
