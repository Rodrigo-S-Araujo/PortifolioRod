import styled from "styled-components";

import IconeGithub from "/assets/git-branco.png";
import IconeInstagram from "/assets/insta-branco.png";
import IconeLinkedin from "/assets/linkedin-branco.png";

const ContainerIcones = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconesEstilizados = styled.img`
  border-bottom: none;
  max-height: 20px;
`;

const IconesRedesSociais = (ref, path, alt) => {
  return (
    <ContainerIcones>
      <a href={"#"}>
        <IconesEstilizados src={IconeGithub} alt={alt} />
      </a>
      <a href="#">
        <IconesEstilizados src={IconeInstagram} alt="Icone GitHub" />
      </a>
      <a href="#">
        <IconesEstilizados src={IconeLinkedin} alt="Icone Linkedin" />
      </a>
    </ContainerIcones>
  );
};

export default IconesRedesSociais;
