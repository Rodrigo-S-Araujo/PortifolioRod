import styled from "styled-components";
import habilidadesJson from "../Habilidades/habilidades.json";

const SectionHardSkills = styled.section`
  margin-top: 30px;
  padding-right: 20px;
  border-right: solid var(--cor-bg-secundaria);
  h3 {
    color: black;
    font-size: 1.5rem;
    text-align: center;
  }
  @media print {
    h3 {
      font-size: 16px;
    }
  }
`;

const ContainerHardSkills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    color: black;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  div {
    border-radius: 50px;
    background-color: black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: auto;
    height: 30px;
  }
  @media print {
    li {
      gap: 3px;
    }
    div {
      width: 19px;
      height: 19px;
    }
    img {
      height: 15px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;

const HardSkills = () => {
  return (
    <SectionHardSkills>
      <h3>HardSkills</h3>
      <ContainerHardSkills>
        {habilidadesJson.map((habilidade) => (
          <li key={habilidade.titulo}>
            <div>
              <img src={`assets/${habilidade.titulo}.png`} />
            </div>
            <h4>{habilidade.titulo}</h4>
          </li>
        ))}
      </ContainerHardSkills>
    </SectionHardSkills>
  );
};

export default HardSkills;
