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

const IconesRedesSociais = () => {
  return (
    <ContainerIcones>
      <a
        href="https://github.com/Rod-S-Araujo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconesEstilizados src={IconeGithub} alt="Icone GitHub" />
      </a>
      <a
        href="https://www.instagram.com/digosaraujo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconesEstilizados src={IconeInstagram} alt="Icone Instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/rodrigo-araujo-338530279/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconesEstilizados src={IconeLinkedin} alt="Icone Linkedin" />
      </a>
    </ContainerIcones>
  );
};

export default IconesRedesSociais;
