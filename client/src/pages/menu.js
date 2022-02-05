import { Carousel, CarouselItem } from "react-bootstrap";
import test from "../assets/drinks2.mp4";
import { classes } from "istanbul-lib-coverage";

const DrinkMenu = () => {
  const style = {
    div: {
      width: "75%",
      heigh: "100%",
      textAlign: "left",
      position: "relative",
      top: "10vh",
      left: "5vw",
    },
  };

  return (
    <div style={style.div} className="item active">
      <h1>COCKTAILS</h1>

      <h2>CITRUS EL' FASHIONED</h2>
      <h4>
        123 Dos Reposado, Los Vecinos Mezcal, muddled grapefruit and cherry,
        orange bitters, demerara
      </h4>
      <h2>15</h2>
      <h2>SPICED KOYO</h2>
      <h4>
        St. George Spiced Pear liqueur, Wheatley vodka, lime juice, simple
        syrup, press
      </h4>
      <h2>12</h2>
      <h2>KYURI MULE</h2>
      <h4>
        Tinkerman's Shiso Cucumber Gin, yuzu juice, honey simple syrup,
        Fentiman's ginger beer
      </h4>
      <h2>14</h2>
      <h2>YAMI ZAKURO</h2>
      <h4>
        Scapegrace Gin, lemon juice, pomegranate juice, simple syrup, egg white
      </h4>
      <h2>13</h2>
      <h2>APPERU MANHATTAN</h2>
      <h4>
        Red delicious apple and cinnamon sous vide Buffalo Trace, Sazerac rye,
        carpano antica sweet vermouth, Montenegro amaro, spiced apple bitters
      </h4>
      <h2>15</h2>
      <h2>ICHIGO LYCHEETINI</h2>
      <h4>Wheatley vodka, raspberry puree, lychee juice, lime, simple syrup</h4>
      <h2>12</h2>
    </div>
  );
};

export default DrinkMenu;
