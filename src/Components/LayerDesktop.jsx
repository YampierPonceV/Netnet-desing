import Layer from "./Layers-desing";
import CardContent from "./card-content";
import Card from "./Card";

//seccion 1
import DesktopCoverUno from "../img/populars/desktop1.png";
import DesktopCoverDos from "../img/populars/desktop2.png";
import DesktopCoverTres from "../img/populars/desktop3.png";
import DesktopCoverCuatro from "../img/populars/desktop4.png";
import DesktopCoverCinco from "../img/populars/desktop5.png";
import DesktopCoverSeis from "../img/populars/desktop6.png";
const LayerDesktop = () => {
  return (
    <Layer className="desktop">
      <section>
        <h2>Populares en Netnet</h2>
        <CardContent>
          <Card url={DesktopCoverUno} des="cover" titulo="japonesa"></Card>
          <Card url={DesktopCoverDos} des="cover" titulo="japonesa"></Card>
          <Card url={DesktopCoverTres} des="cover" titulo="japonesa"></Card>
          <Card url={DesktopCoverCuatro} des="cover" titulo="japonesa"></Card>
          <Card url={DesktopCoverCinco} des="cover" titulo="japonesa"></Card>
          <Card url={DesktopCoverSeis} des="cover" titulo="japonesa"></Card>
        </CardContent>
      </section>
    </Layer>
  );
};

export default LayerDesktop;
