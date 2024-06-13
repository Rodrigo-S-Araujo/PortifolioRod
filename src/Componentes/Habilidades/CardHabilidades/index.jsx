import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;

  padding: 10%;

  border-radius: 15px;
  border: 5px;
  border-color: var(--cor-da-fonte);

  img {
    box-sizing: border-box;
    max-width: 40px;
    flex-grow: 1;
  }
`;

const CardHabilidade = ({ habilidade }) => {
  return (
    <ContainerCard>
      <img src={`/assets/${habilidade.titulo}.png`} />
      <h3>{habilidade.titulo}</h3>
      <h5>{habilidade.descricao}</h5>
    </ContainerCard>
  );
};

export default CardHabilidade;
