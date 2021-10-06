import styled from "styled-components";
import bghero from "../img/bg-hero.png";
import bgheroDesktop from "../img/bg-hero-desktop.png";

const Hero = styled.div`
  background-image: url(${bghero});
  background-repeat: no-repeat;
  background-size: cover;
  block-size: 513px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    background-image: url(${bgheroDesktop});
    block-size: 100vh;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    background: linear-gradient(180deg, #191919 0%, rgba(0, 0, 0, 0) 100%),
      linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 101.98%);
  }

  &::after {
    top: 0;
    block-size: 198px;
  }
  &::before {
    bottom: 0;
    transform: rotate(180deg);
    block-size: 96px;
    background: linear-gradient(180deg, #191919 -99.29%, rgba(0, 0, 0, 0) 100%),
      linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 101.98%);
  }

  .logo-netnet {
    position: absolute;
    z-index: 20;
    margin-block-start: 16px;
    left: 16px;
  }
`;

export default Hero;
