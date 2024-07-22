import styled from "styled-components";

const RedeSocial = styled.li`
  list-style: none;
  margin: 15px 0 0 15px;
  p {
    font-size: 14px;
    color: black;
    font-weight: 200;
  }
  img {
    background-color: var(--cor-bg-primaria);
    width: 20px;
    height: auto;
    padding: 2px;
    border-radius: 50px;
    border: none;
  }
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: 10px;
  }

  @media print {
    margin: 3px 0 0 15px;
    p {
      font-size: 10px;
    }
    img {
      width: 10px;
      height: auto;
    }
  }
`;

const RedesSociaisCurriculo = ({ linkRede, iconeRede, children }) => {
  return (
    <RedeSocial>
      <a href={linkRede} target="_blank" rel="noopener noreferrer">
        <img src={iconeRede}></img>
        <p>{children}</p>
      </a>
    </RedeSocial>
  );
};

export default RedesSociaisCurriculo;
