import styled from "styled-components";
import noticiasJSON from "./noticiasMaterias.json";
import CardNoticia from "./CardNoticias";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionNoticias = styled.section`
  padding: 0;
  margin: 0;
  text-align: center;
`;
const ContainerNoticias = styled.div`
  margin: 0 5%;
  padding: 5% 0;
`;
const ContainerCard = styled.div`
  height: auto;
  box-sizing: border-box;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Noticias = () => {
  return (
    <SectionNoticias>
      <h2>Matérias</h2>
      <ContainerNoticias>
        <Carousel responsive={responsive} infinite={true}>
          {noticiasJSON.map((props) => (
            <ContainerCard key={props.id}>
              <CardNoticia props={props} />
            </ContainerCard>
          ))}
        </Carousel>
      </ContainerNoticias>
    </SectionNoticias>
  );
};

export default Noticias;
