import styled from "styled-components";
import CardCursos from "./CardCursos";
import imersoes from "./imersoes.json";
import cursos from "./CatchCursos/cursos.json";

const ContainerCursosCertificado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  margin: auto;
`;
const ConteudoCursos = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const BoxCurso = styled.li`
  list-style-type: none;
  border-bottom: 1px solid var(--cor-da-fonte);
  border-right: 1px solid var(--cor-da-fonte);
  border-radius: 15px;
  padding: 0;
  margin: 5px 0;
  width: 40vw;
  height: 75px;
`;
const CursosCertificados = () => {
  return (
    <ContainerCursosCertificado>
      <h2>Conquistas</h2>
      <h5>cursos, imersões e certificados conquistados</h5>
      <ContainerConteudo>
        <h4>Imersões e Bootcamp's</h4>
        <ConteudoCursos>
          {imersoes.map((prop) => (
            <BoxCurso key={prop.id}>
              <CardCursos prop={prop} />
            </BoxCurso>
          ))}
        </ConteudoCursos>
        <h4>Cursos e Certificados</h4>
        <ConteudoCursos id="containerConteudoCursos">
          {cursos.map((prop) => (
            <BoxCurso key={prop.id}>
              <CardCursos prop={prop} />
            </BoxCurso>
          ))}
        </ConteudoCursos>
      </ContainerConteudo>
    </ContainerCursosCertificado>
  );
};

export default CursosCertificados;
