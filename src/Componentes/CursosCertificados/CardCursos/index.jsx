import styled from "styled-components";

const ContainerCard = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
`;
const ContainerIcones = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
const ImagemEscola = styled.img`
  width: 15px;
  height: auto;
`;
const ImagemSecundaria = styled.img`
  max-width: 15px;
  transform: translateY(-7px) translateX(7px);
`;

const CardCursos = ({ prop }) => {
  return (
    <ContainerCard href={prop.path} target="_blank" rel="noopener noreferrer">
      <ContainerIcones>
        <ImagemEscola src={prop.src} alt="" />
        <ImagemSecundaria src={prop.src2} alt="" />
      </ContainerIcones>
      <h6>{prop.titulo}</h6>
    </ContainerCard>
  );
};

export default CardCursos;
