import { Link } from "react-router-dom";
import styles from "./BotaoVoltar.module.css";

const BotaoVoltar = () => {
  return (
    <Link to={-1} className={styles.botaoVoltar}>
      <h4>Voltar</h4>
    </Link>
  );
};

export default BotaoVoltar;
