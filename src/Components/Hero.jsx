// import React from "react";
import Hero from "./Hero-desing.jsx";
import titleMatrix from "../img/title-hero.png";
import HeroTitle from "./Hero-title-description.jsx";
import { Button, ButtonContainer } from "./Button.jsx";
/* insertar imagenes para los botones */
import plus from "../img/plus.svg";
import play from "../img/play.svg";
import info from "../img/interogant.svg";
import MenuHero from "./Menu-hero.jsx";
import logoNetnet from "../img/logo-netnet.png";
const hero = () => {
  return (
    <Hero className="hero">
      <img className="logo-netnet" src={logoNetnet} alt="logo-netnet" />
      <MenuHero>
        <ul>
          <li>
            <a href="#index">Series</a>
          </li>
          <li>
            <a href="#index">Peliculas</a>
          </li>
          <li>
            <a href="#index">Mi lista</a>
          </li>
        </ul>
      </MenuHero>
      <HeroTitle>
        <img src={titleMatrix} alt="matrix-title" />
        <div>
          <ul>
            <li>Surrealista</li>
            <li>Distópico</li>
            <li>Hábil</li>
            <li>Siniestro</li>
            <li>Emocionante</li>
          </ul>
        </div>
        <ButtonContainer>
          <Button className="buton-column">
            <img src={plus} alt="plus" />
            <span>Mi lista</span>
          </Button>
          <Button>
            <img src={play} alt="reproducir" />
            <span>Reproducir</span>
          </Button>
          <Button className="buton-column">
            <img src={info} alt="más-información" />
            <span>Info</span>
          </Button>
        </ButtonContainer>
      </HeroTitle>
    </Hero>
  );
};

export default hero;
