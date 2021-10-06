import styled from "styled-components";

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-block-end: -26px;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 50px;
    left: 0;
  }

  ul {
    display: flex;
    gap: 13px;
    padding: 0;
    @media screen and (min-width: 768px) {
      display: none;
    }

    li:first-child {
      list-style: none;
    }
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export default HeroTitle;
