import imagen1 from "../img/icons/home.svg";
import imagen2 from "../img/icons/proximanente.svg";
import imagen3 from "../img/icons/buscar.svg";
import imagen4 from "../img/icons/descarga.svg";
import Listas from "./Lsitas-menu";

const MenuNavegacion = () => {
  return (
    <div>
      <Listas>
        <li>
          <a href="#index">
            <img src={imagen1} alt="" />
            <span>Inicio</span>
          </a>
        </li>
        <li>
          <a href="#index">
            <img src={imagen2} alt="" />
            <span>Próximamente</span>
          </a>
        </li>
        <li>
          <a href="#index">
            <img src={imagen3} alt="" />
            <span>Buscar</span>
          </a>
        </li>
        <li>
          <a href="#index">
            <img src={imagen4} alt="" />
            <span>Descargas</span>
          </a>
        </li>
      </Listas>
    </div>
  );
};

export default MenuNavegacion;
