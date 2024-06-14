import { Link } from "react-router-dom";
import styles from "./BotaoPrincipal.module.css";
import styled from "styled-components";

const ContainerBotao = styled.div`
  margin: 0;
  padding: 0;

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const BotaoPrincipal = ({ children, img, to }) => {
  return (
    <ContainerBotao>
      <Link className={styles.linkEstilizado} to={to}>
        <img src={img} alt={`Icone do botao de ${children}`} />
        <h4>{children}</h4>
      </Link>
    </ContainerBotao>
  );
};

export default BotaoPrincipal;
