import styles from "./BarraMenus.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenusSuperiores = styled.nav`
  display: flex;
  gap: 15vw;
  justify-content: center;
  align-items: center;
`;

const BarraMenus = () => {
  return (
    <MenusSuperiores>
      <Link className={styles.linkEstilizado}>
        <img src="/assets/Home-branco.png" alt="icone homepage" />
        <h4>Home</h4>
      </Link>
      <Link className={styles.linkEstilizado}>
        <img src="/assets/avatar-branco.png" alt="icone Sobre Mim" />
        <h4>Sobre mim...</h4>
      </Link>
    </MenusSuperiores>
  );
};

export default BarraMenus;
