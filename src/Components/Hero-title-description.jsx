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

  ul {
    display: flex;
    gap: 13px;
    padding: 0;

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
