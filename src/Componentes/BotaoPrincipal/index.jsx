import { Link } from "react-router-dom";
import styles from "./BotaoPrincipal.module.css";
import styled from "styled-components";

const ContainerBotao = styled.div`
  margin: 0;
  padding: 0;
  display: ${(props) => (props.estado === "ativo" ? "block" : "none")};
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const BotaoPrincipal = ({ children, img, to, estado }) => {
  return (
    <ContainerBotao estado={estado}>
      <Link className={styles.linkEstilizado} to={to}>
        <img src={img} alt={`Icone do botao de ${children}`} />
        <h4>{children}</h4>
      </Link>
    </ContainerBotao>
  );
};

export default BotaoPrincipal;
