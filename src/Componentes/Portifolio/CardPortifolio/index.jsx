import styled from "styled-components";

const CardPortifolioEstilizada = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50%;
  :hover {
    opacity: 100%;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  background-image: url("/assets/portifolio.png");
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100px;
  width: 130px;
  justify-content: center;
`;
const BotaoGit = styled.a`
  text-decoration: none;
  border-radius: 15px 0 0 15px;
  background-color: #000;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 70%;
  transform: translateY(-75%);
  img {
    width: 30%;
  }
`;
const BotaoFigma = styled.a`
  text-decoration: none;
  border-radius: 0px 15px 15px 0px;
  background-color: #000;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 70%;
  transform: translateY(-75%);
  img {
    width: 30%;
  }
`;
const ContainerTexto = styled.div`
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardPortifolio = () => {
  return (
    <CardPortifolioEstilizada>
      <ContainerBotoes>
        <BotaoGit href="#">
          <img src="/assets/git-branco.png" alt="Icone GitHub" />
          <h5>GitHub</h5>
        </BotaoGit>
        <BotaoFigma href="#">
          <img src="/assets/figmaico.png" alt="Icone GitHub" />
          <h5>Figma</h5>
        </BotaoFigma>
      </ContainerBotoes>
      <ContainerTexto>
        <h4>Meu portifólio</h4>
        <h5>
          Pagina desenvolvida com finalidade de mostrar os projetos ,
          habilidades e cursos que conquistei.
        </h5>
      </ContainerTexto>
    </CardPortifolioEstilizada>
  );
};

export default CardPortifolio;
