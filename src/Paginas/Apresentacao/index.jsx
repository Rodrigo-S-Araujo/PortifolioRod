import styled from "styled-components";
import EstilosGlobais from "../../Componentes/EstilosGlobais";
import RedesSociaisCurriculo from "../../Componentes/RedesSociaisCurriculo";
import redesSociais from "../../Componentes/RedesSociaisCurriculo/redessociais.json";
import HardSkills from "../../Componentes/HardSkills";
import Experiencias from "../../Componentes/Profissional";
import ListaCursos from "../../Componentes/ListaCursos";

const HeaderCurriculo = styled.section`
  padding: 15px;
  max-width: 100vw;
  border-bottom: solid var(--cor-bg-secundaria);
  margin: 0 15px;
  h1,
  h3,
  h4 {
    color: black;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 60px;
  }
  @media print {
    h1 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;
const SecaoConteudo = styled.section`
  display: flex;
`;
const ContainerSobreMim = styled.div`
  padding: 0 20px;
  h3 {
    margin-top: 30px;
    padding: 5px 0 0 0;
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: black;
  }
  p {
    padding-left: 10px;
    font-weight: 200;
    text-align: justify;
    text-indent: 1.5rem;
    font-size: 18px;
    color: black;
  }
  @media print {
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`;
const CursosCertificados = styled.section`
  padding-left: 20px;
  h2,
  h3,
  h4,
  h5,
  p {
    color: black;
  }
  h3 {
    margin-top: 30px;
    padding: 5px 0 0 0;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    padding-left: 15px;
  }
  @media print {
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 14px;
    }
  }
`;

const Apresentacao = () => {
  return (
    <>
      <EstilosGlobais />
      <HeaderCurriculo>
        <h1>RODRIGO SANTANA DE ARAUJO</h1>
        <h3>Desenvolvedor Front-End</h3>
        <h4>Maringá/PR</h4>
        {redesSociais.map((redesocial) => (
          <RedesSociaisCurriculo
            key={redesocial.rede}
            linkRede={redesocial.link}
            iconeRede={redesocial.icone}
          >
            {redesocial.rede}
          </RedesSociaisCurriculo>
        ))}
      </HeaderCurriculo>
      <SecaoConteudo>
        <div>
          <HardSkills />
        </div>
        <div>
          <ContainerSobreMim>
            <h3>Sobre mim</h3>
            <p>
              Olá, sou Rodrigo Araujo, desenvolvedor front-end apaixonado por
              criar experiências web interativas e funcionais. Trabalho com as
              principais tecnologias da área, incluindo HTML, CSS, JavaScript,
              TypeScript, React e Angular. Minha jornada na programação é guiada
              pelo desejo constante de aprender e inovar, buscando sempre a
              excelência em cada projeto que desenvolvo.
            </p>
            <p>
              Além da tecnologia, tenho um grande interesse por animes, que me
              inspiram com suas narrativas e criatividade. Também sou faixa
              marrom de jiu-jitsu, um esporte que me ensinou disciplina, foco e
              resiliência — qualidades que aplico no meu dia a dia profissional.
              Combinando essas paixões, procuro trazer um equilíbrio entre
              técnica e arte em tudo o que faço.
            </p>
          </ContainerSobreMim>
          <Experiencias />
          <CursosCertificados>
            <h3>Cursos na área de técnologia</h3>
            <ul>
              <ListaCursos>HTML e CSS</ListaCursos>
              <ListaCursos>JavaScript</ListaCursos>
              <ListaCursos>TypeScript</ListaCursos>
              <ListaCursos>React</ListaCursos>
              <ListaCursos>Angular</ListaCursos>
              <ListaCursos>C#</ListaCursos>
            </ul>
          </CursosCertificados>
        </div>
      </SecaoConteudo>
    </>
  );
};

export default Apresentacao;
