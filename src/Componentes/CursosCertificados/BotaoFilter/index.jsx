import styled from "styled-components";

const ContainerBotao = styled.button`
  text-decoration: none;
  background-color: transparent;
  border-radius: 15px;
  border-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;

  box-shadow: ${({ ativa }) =>
    ativa === "ativa"
      ? "inset 0px 0px 15px var(--cor-da-fonte)"
      : "0px 1px 6px rgba(255, 255, 255, 0.7)"};

  &:hover {
    box-shadow: inset 0px 0px 15px var(--cor-da-fonte);
  }
`;

const BotaoFilter = ({ linguagem, onClick, ehAtiva }) => {
  return (
    <ContainerBotao onClick={onClick} ativa={ehAtiva}>
      <h5>{linguagem}</h5>
    </ContainerBotao>
  );
};
export default BotaoFilter;
