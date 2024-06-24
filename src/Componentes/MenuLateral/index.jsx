import styled from "styled-components";
import BotaoPrincipal from "../BotaoPrincipal";
import BotaoMenuSobreMim from "../BotaoMenuSobremim";
import { useState } from "react";

const ContainerMenuSobreMim = styled.div`
  display: flex;
`;

const MenuEstilizado = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  height: 100%;
  width: ${(props) => (props.estado === "inativo" ? "2vw" : "100px")};
  background-color: #232323;
  transition: width 0.5s ease-in-out;
`;

const MenuLateral = () => {
  const [estadoBotao, setEstadoBotao] = useState("inativo");

  const trocarEstadoBotao = () => {
    setEstadoBotao(estadoBotao === "ativo" ? "inativo" : "ativo");
  };

  return (
    <ContainerMenuSobreMim>
      <MenuEstilizado estado={estadoBotao}>
        <BotaoPrincipal
          estado={estadoBotao}
          to={"/"}
          img={"/assets/Home-branco.png"}
        >
          Home
        </BotaoPrincipal>
        <BotaoPrincipal
          estado={estadoBotao}
          to={"/sobremim"}
          img={"/assets/avatar-branco.png"}
        >
          Sobre Mim
        </BotaoPrincipal>
      </MenuEstilizado>
      <BotaoMenuSobreMim estado={estadoBotao} onClick={trocarEstadoBotao} />
    </ContainerMenuSobreMim>
  );
};

export default MenuLateral;
