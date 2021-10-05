import styled from "styled-components";

const Listas = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0;
  box-sizing: border-box;
  padding: 15px 30px;
  position: fixed;
  z-index: 10000;
  bottom: 0;
  margin: 0;
  background: #080808;

  li a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: white;

    img {
      width: 100%;
    }
  }
`;

export default Listas;
