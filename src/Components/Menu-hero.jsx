import styled from "styled-components";

const MenuHero = styled.div`
  position: relative;
  z-index: 10;

  ul {
    list-style: none;
    display: flex;
    margin-block-start: 64px;
    gap: 48px;
    font-size: 14px;
    padding: 0;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default MenuHero;
