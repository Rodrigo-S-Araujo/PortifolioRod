import styled from "styled-components";
import cursos from "../CursosCertificados/CatchCursos/cursos.json";
const ContainerLista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemLista = styled.li`
  list-style: none;
  h5 {
    font-size: 0.8rem;
  }
  a {
    text-decoration: none;
  }
  p {
    font-size: 0.7rem;
  }
  @media print {
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 8px;
    }
  }
`;

const ListaCursos = ({ children }) => {
  let cursosFiltrados = cursos.filter((curso) =>
    curso.titulo.includes(children)
  );

  return (
    <li>
      <h4>{children}</h4>
      <ContainerLista>
        {cursosFiltrados.map((curso) => (
          <ItemLista key={curso.id}>
            <h5>{curso.titulo}</h5>
            <a href={curso.path}>
              <p>{curso.path}</p>
            </a>
          </ItemLista>
        ))}
      </ContainerLista>
    </li>
  );
};

export default ListaCursos;
