import styled from "styled-components";
import CardPortifolio from "./CardPortifolio";
import portifolioJson from "./portifolio.json";

const PortifolioTitulo = styled.section`
  text-align: center;
  padding: 50px 0 30px 0;
`;
const ConteudoPortifolio = styled.ul`
  padding: 5px 0;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
  gap: 10%;
`;
const ContainerPortifolio = () => {
  return (
    <main>
      <PortifolioTitulo>
        <h2>Portifólio</h2>
        <h5>de uma olhada nos projetos que já desenvolvi</h5>
      </PortifolioTitulo>
      <ConteudoPortifolio>
        {portifolioJson.map((projeto) => (
          <CardPortifolio key={projeto.id} projeto={projeto} />
        ))}
      </ConteudoPortifolio>
    </main>
  );
};

export default ContainerPortifolio;
