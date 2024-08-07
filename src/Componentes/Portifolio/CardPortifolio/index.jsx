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
  @media (min-width: 1201px) {
    max-width: 25%;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  background-image: url(${(props) => props.urlbg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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

const CardPortifolio = ({ projeto }) => {
  return (
    <CardPortifolioEstilizada>
      <ContainerBotoes urlbg={projeto.path}>
        <BotaoGit
          href={projeto.git}
          target="_brank"
          rel="noopener noreferrer"
          style={{ display: projeto.git ? "flex" : "none" }}
        >
          <img src="/assets/git-branco.png" alt="Icone GitHub" />
          <h5>GitHub</h5>
        </BotaoGit>
        <BotaoFigma href="#" style={{ display: projeto.git ? "flex" : "none" }}>
          <img src="/assets/figmaico.png" alt="Icone GitHub" />
          <h5>Figma</h5>
        </BotaoFigma>
      </ContainerBotoes>
      <ContainerTexto>
        <h4>{projeto.titulo}</h4>
        <h5>{projeto.subtitulo}</h5>
      </ContainerTexto>
    </CardPortifolioEstilizada>
  );
};

export default CardPortifolio;
