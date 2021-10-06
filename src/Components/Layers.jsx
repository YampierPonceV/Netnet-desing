import Card from "./Card";
import Layer from "./Layers-desing";
import CardContent from "./card-content";
// importacion de imagenes para los card

//seccion 1
import coverUno from "../img/populars/image1.png";
import coverDos from "../img/populars/image2.png";
import coverTres from "../img/populars/image3.png";
import coverCuatro from "../img/populars/image4.png";
import coverCinco from "../img/populars/image5.png";
import coverSeis from "../img/populars/image6.png";

//seccion 2
import secDosCoverUno from "../img/japonesa/image1.png";
import secDosCoverDos from "../img/japonesa/image2.png";
import secDosCoverTres from "../img/japonesa/image3.png";
import secDosCoverCuatro from "../img/japonesa/image4.png";
import secDosCoverCinco from "../img/japonesa/image5.png";
import secDosCoverSeis from "../img/japonesa/image6.png";
import LayerDesktop from "./LayerDesktop";

//seccion 3
import secTresCoverUno from "../img/crimenes/image1.png";
import secTresCoverDos from "../img/crimenes/image2.png";
import secTresCoverTres from "../img/crimenes/image3.png";
import secTresCoverCuatro from "../img/crimenes/image4.png";
import secTresCoverCinco from "../img/crimenes/image5.png";
import secTresCoverSeis from "../img/crimenes/image6.png";

const Layers = () => {
  return (
    <>
      <Layer className="movile">
        <section>
          <h2>Populares en Netnet</h2>
          <CardContent>
            <Card url={coverUno} des="cover uno" titulo="matriz recardo"></Card>
            <Card url={coverDos} des="cover uno" titulo="matriz recardo"></Card>
            <Card
              url={coverTres}
              des="cover uno"
              titulo="matriz recardo"
            ></Card>
            <Card
              url={coverCuatro}
              des="cover uno"
              titulo="matriz recardo"
            ></Card>
            <Card
              url={coverCinco}
              des="cover uno"
              titulo="matriz recardo"
            ></Card>
            <Card
              url={coverSeis}
              des="cover uno"
              titulo="matriz recardo"
            ></Card>
          </CardContent>
        </section>
        <section>
          <h2>Series japonesas anime</h2>
          <CardContent>
            <Card url={secDosCoverUno} des="cover" titulo="japonesa"></Card>
            <Card url={secDosCoverDos} des="cover" titulo="japonesa"></Card>
            <Card url={secDosCoverTres} des="cover" titulo="japonesa"></Card>
            <Card url={secDosCoverCuatro} des="cover" titulo="japonesa"></Card>
            <Card url={secDosCoverCinco} des="cover" titulo="japonesa"></Card>
            <Card url={secDosCoverSeis} des="cover" titulo="japonesa"></Card>
          </CardContent>
        </section>
        <section>
          <h2>Series de EE.UU. sobre crimenes</h2>
          <CardContent>
            <Card url={secTresCoverUno} des="tres" titulo="sin titulo"></Card>
            <Card url={secTresCoverDos} des="tres" titulo="sin titulo"></Card>
            <Card url={secTresCoverTres} des="tres" titulo="sin titulo"></Card>
            <Card
              url={secTresCoverCuatro}
              des="tres"
              titulo="sin titulo"
            ></Card>
            <Card url={secTresCoverCinco} des="tres" titulo="sin titulo"></Card>
            <Card url={secTresCoverSeis} des="tres" titulo="sin titulo"></Card>
          </CardContent>
        </section>
      </Layer>
      <LayerDesktop></LayerDesktop>
    </>
  );
};
export default Layers;
