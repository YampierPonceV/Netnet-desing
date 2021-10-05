import styled from "styled-components";

const Img = styled.img``;
const Card = ({ url, des, titulo }) => {
  return <Img src={url} alt={des} title={titulo} />;
};

export default Card;
