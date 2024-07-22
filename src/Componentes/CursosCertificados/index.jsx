import styled from "styled-components";
import CardCursos from "./CardCursos";
import imersoes from "./imersoes.json";
import cursos from "./CatchCursos/cursos.json";
import BotaoFilter from "./BotaoFilter";
import { useState } from "react";

const linguagens = [
  "HTML",
  "CSS",
  "HTTP",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "C#",
];

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
  justify-content: space-around;
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

  @media (min-width: 760px) and (max-width: 1200px) {
    width: 25vw;
  }
  @media (min-width: 1201px) {
    width: 15vw;
  }
`;
const ContainerMenuLinguagens = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 10px;
`;

const CursosCertificados = () => {
  const [filtroAtivo, setFiltroAtivo] = useState(null);

  const marcaFiltroAtivo = (linguagem) => {
    if (filtroAtivo === linguagem) {
      setFiltroAtivo(null);
    } else {
      setFiltroAtivo(linguagem);
    }
  };

  let cursosFiltrados;

  if (filtroAtivo) {
    cursosFiltrados = cursos.filter((curso) =>
      curso.titulo.includes(filtroAtivo)
    );
  } else {
    cursosFiltrados = cursos;
  }
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
        <ContainerMenuLinguagens>
          {linguagens.map((linguagem) => (
            <BotaoFilter
              onClick={() => marcaFiltroAtivo(linguagem)}
              linguagem={linguagem}
              key={linguagem}
              ehAtiva={filtroAtivo === linguagem ? "ativa" : "inativa"}
            />
          ))}
        </ContainerMenuLinguagens>
        <ConteudoCursos id="containerConteudoCursos">
          {cursosFiltrados.map((prop) => (
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
