import styled from "styled-components";
import AvatarPrincipal from "/assets/meu-avatar.png";
import IconesRedesSociais from "../IconesRedesSociais";

const ContainerCover = styled.section`
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50%;
  padding-top: 30%;
  @media (min-width: 760px) and (max-width: 1200px) {
    padding-bottom: 20%;
  }
  @media (min-width: 1201px) {
    padding-bottom: 10%;
    padding-top: 5%;
  }
`;

const AvatarEstilizado = styled.img`
  max-width: 50vw;
  height: auto;
  padding: 5% 10% 0 10%;
  margin: 0;
  border-bottom: 1px solid #fff;
  @media (min-width: 760px) and (max-width: 1200px) {
    max-width: 40vw;
  }
  @media (min-width: 1201px) {
    max-width: 20vw;
  }
`;
const SpanStilizado = styled.strong`
  font-size: 2em;
`;

const DivApresentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 2rem;
`;

const Cover = () => {
  return (
    <ContainerCover>
      <AvatarEstilizado src={AvatarPrincipal} alt="Avatar Rodrigo Araujo" />
      <DivApresentacao>
        <h3>Olá Mundo!</h3>
        <h3>
          Sou <SpanStilizado>Rodrigo Araujo</SpanStilizado>
        </h3>
        <h4>Desenvolvedor Front End...</h4>
      </DivApresentacao>
      <IconesRedesSociais />
    </ContainerCover>
  );
};

export default Cover;
