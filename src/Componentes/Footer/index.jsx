import styled from "styled-components";
import IconesRedesSociais from "../IconesRedesSociais";

const FooterEstilizado = styled.footer`
  background-color: #505050;
  padding: 8px 5px;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <h3>Feito por mim...</h3>
      <IconesRedesSociais />
    </FooterEstilizado>
  );
};

export default Footer;
