import styled from "styled-components";

const CardNoticiasEstilizado = styled.a`
  padding: 0;
  margin: 0;
  text-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 150px;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.3);
`;
const FigureCard = styled.figure`
  width: 100%;
  height: auto;
  margin: 0;
  overflow: hidden;
`;
const ImgCard = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media (min-width: 760px) and (max-width: 1200px) {
    width: 50%;
  }
  @media (min-width: 1201px) {
    width: 30%;
  }
`;
const FigcaptionCard = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
  box-sizing: border-box;
  @media (min-width: 760px) and (max-width: 1200px) {
    width: 50%;
    padding: 2%;
  }
  @media (min-width: 1201px) {
    width: 30%;
    padding: 1%;
  }
`;

const CardNoticia = ({ props }) => {
  return (
    <CardNoticiasEstilizado
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FigureCard>
        <ImgCard src={props.img} />
        <FigcaptionCard>
          <h5>{props.titulo}</h5>
        </FigcaptionCard>
      </FigureCard>
    </CardNoticiasEstilizado>
  );
};

export default CardNoticia;
