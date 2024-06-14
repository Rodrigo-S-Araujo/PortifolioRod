import styled from "styled-components";
import IconeMenu from "/assets/seta-cinza.svg";

const BotaoEstilizado = styled.button`
  border-radius: 0 0 35px 0;
  position: absolute;
  cursor: pointer;
  background-color: var(--cor-bg-primaria);
  text-decoration: none;
  appearance: none;
  border: 0;
  img {
    transform: ${(props) =>
      (props.ativo = "1" ? "rotate(180deg)" : "rotate(0)")};
    width: 60px;
    height: auto;
    padding: 5px;
  }
`;

const BotaoMenuSobreMim = () => {
  return (
    <div>
      <BotaoEstilizado ativo="1">
        <img
          src={IconeMenu}
          alt="Icone de esconder ou expandir o menu lateral"
        />
      </BotaoEstilizado>
    </div>
  );
};

export default BotaoMenuSobreMim;
