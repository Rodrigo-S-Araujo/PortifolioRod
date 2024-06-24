import styled from "styled-components";
import BotaoPrincipal from "../BotaoPrincipal";

const MenusSuperiores = styled.nav`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

const BarraMenus = () => {
  return (
    <MenusSuperiores>
      <BotaoPrincipal to={"/"} img={"/assets/Home-branco.png"}>
        Home
      </BotaoPrincipal>
      <BotaoPrincipal to={"/sobremim"} img={"/assets/avatar-branco.png"}>
        Sobre Mim
      </BotaoPrincipal>
    </MenusSuperiores>
  );
};

export default BarraMenus;
