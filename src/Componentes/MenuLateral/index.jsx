import styled from "styled-components";
import BotaoPrincipal from "../BotaoPrincipal";
import BotaoMenuSobreMim from "../BotaoMenuSobremim";

const ContainerMenuSobreMim = styled.div`
  display: flex;
`;

const MenuEstilizado = styled.aside`
  box-sizing: border-box;
  height: 100%;
  width: 25vw;
  background-color: #232323;
`;

const MenuLateral = () => {
  return (
    <ContainerMenuSobreMim>
      <MenuEstilizado>
        <BotaoPrincipal to={"/"} img={"/assets/Home-branco.png"}>
          Home
        </BotaoPrincipal>
        <BotaoPrincipal to={"/sobremim"} img={"/assets/avatar-branco.png"}>
          Sobre Mim
        </BotaoPrincipal>
      </MenuEstilizado>
      <BotaoMenuSobreMim />
    </ContainerMenuSobreMim>
  );
};

export default MenuLateral;
