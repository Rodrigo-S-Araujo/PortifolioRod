import styled from "styled-components";
import experienciasProf from "./experiencias.json";

const ContainerExperiencias = styled.section`
  h2,
  h3,
  h4,
  h5,
  p {
    color: black;
  }
  padding: 0 20px;
  h3 {
    margin-top: 30px;
    padding: 5px 0 0 0;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 200;
    span {
      font-size: 0.8rem;
    }
  }
  h5 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  li {
    list-style: none;
  }
  @media print {
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

const Experiencias = () => {
  return (
    <ContainerExperiencias>
      <h3>Experiências Profissionais</h3>
      <ul>
        {experienciasProf.map((experiencia) => (
          <li key={experiencia.id}>
            <h4>
              <span>Cargo:</span>
              {experiencia.cargo}
            </h4>
            <h5>{experiencia.empresa}</h5>
            <p>
              Data de Início: {experiencia.inicio} - Data de Encerramento:{" "}
              {experiencia.termino
                ? experiencia.termino
                : "Até o presente momento"}
            </p>
          </li>
        ))}
      </ul>
    </ContainerExperiencias>
  );
};

export default Experiencias;
