import styled from "styled-components";

const Img = styled.img`
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 140px;
    object-fit: cover;
    position: center;
  }
`;
const Card = ({ url, des, titulo }) => {
  return <Img src={url} alt={des} title={titulo} />;
};

export default Card;
