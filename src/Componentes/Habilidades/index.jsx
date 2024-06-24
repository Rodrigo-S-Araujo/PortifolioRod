import styled from "styled-components";
import habilidades from "./habilidades.json";
import CardHabilidade from "./CardHabilidades";

const ContainerHabilidades = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ConteudoCards = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 5%;
  gap: 5%;
`;
const Card = styled.li`
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-radius: 15px;
  list-style: none;

  margin-bottom: 5%;

  max-width: 45%;
  min-height: 250px;
  @media (min-width: 760px) and (max-width: 1200px) {
    max-width: 20%;
  }
  @media (min-width: 1201px) {
    max-width: 15%;
  }
`;

const Habilidades = () => {
  return (
    <ContainerHabilidades>
      <h2>Habilidades</h2>
      <h5>Linguagens, framewors e Bibliotecas que possuo conhecimento</h5>
      <ConteudoCards>
        {habilidades.map((habilidade) => (
          <Card key={habilidade.id}>
            <CardHabilidade habilidade={habilidade} />
          </Card>
        ))}
      </ConteudoCards>
    </ContainerHabilidades>
  );
};

export default Habilidades;
