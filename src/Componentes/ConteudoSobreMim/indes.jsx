import styled from "styled-components";
const imgRodrigo = "https://github.com/Rod-S-Araujo.png";

const SecaoSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10% 5% 5% 5%;
  align-items: center;
  gap: 10px;
  @media (min-width: 1201px) {
    flex-direction: row;
    padding: 10% 20%;
  }
  h2 {
    text-align: center;
  }
  figure {
    text-align: center;
  }

  img {
    max-width: 80%;
    border-radius: 5px;
    @media (min-width: 1201px) {
      min-width: 15vw;
    }
  }
  p {
    @media (min-width: 1201px) {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

const ConteudoSobreMim = () => {
  return (
    <SecaoSobreMim>
      <div>
        <h2>SOBRE MIM</h2>
        <p>
          {" "}
          Meu nome é Rodrigo Santana de Araujo, e após 9 anos dedicado à
          Economia, decidi trilhar um novo caminho profissional. A paixão pela
          área de desenvolvimento Front End me impulsionou a buscar conhecimento
          e aprimorar minhas habilidades em HTML, CSS, JavaScript e React.
        </p>
        <p>
          {" "}
          Minha trajetória profissional, embora não diretamente ligada à
          tecnologia, me proporcionou experiências valiosas. De 2011 a 2013,
          trabalhei como Gerente Técnico de Recursos Humanos em uma empresa
          terceirizada, gerenciando equipes e processos. Desde 2014 atuo como
          assistente administrativo em um cartório de protesto, onde desenvolvi
          habilidades de organização, comunicação e atendimento ao público.
        </p>
        <p>
          {" "}
          A busca pela progressão na área de Front End é uma decisão consciente.
          A possibilidade de criar interfaces inovadoras e interativas me
          fascina, e a constante evolução tecnológica me mantém em constante
          aprendizado. Sou um entusiasta da cultura Geek, viciado em animes e
          praticante de Jiu Jitsu há mais de 6 anos, faixa marrom. Acredito que
          a disciplina e a perseverança cultivadas nesses hobbies me impulsionam
          a alcançar meus objetivos profissionais.
        </p>
        <p>
          {" "}
          Minha experiência profissional e meu entusiasmo pela área de Front End
          me impulsionam a buscar novas oportunidades. Desejo ingressar em um
          ambiente desafiador e dinâmico, onde possa aplicar meus conhecimentos
          e contribuir para o desenvolvimento de projetos inovadores.
        </p>
      </div>
      <figure>
        <img
          src={imgRodrigo}
          alt="Imagem do criador da pagina Rodrigo Santana de Araujo"
        />
        <figcaption>
          <h4>Esse sou eu!</h4>
        </figcaption>
      </figure>
    </SecaoSobreMim>
  );
};

export default ConteudoSobreMim;
