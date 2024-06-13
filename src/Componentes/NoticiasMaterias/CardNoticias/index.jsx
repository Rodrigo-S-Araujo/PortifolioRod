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
`;
const FigcaptionCard = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
  box-sizing: border-box;
`;

const CardNoticia = ({ props }) => {
  return (
    <CardNoticiasEstilizado href={props.url}>
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
