import styled from "styled-components";

const MenuHero = styled.div`
  position: relative;
  z-index: 10;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 100px;
  }

  ul {
    list-style: none;
    display: flex;
    margin-block-start: 64px;
    gap: 48px;
    font-size: 14px;
    padding: 0;

    @media screen and (min-width: 768px) {
      margin-block-start: 15px;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default MenuHero;
