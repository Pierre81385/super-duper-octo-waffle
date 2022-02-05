import { Carousel, CarouselItem } from "react-bootstrap";
import test from "../assets/drinks2.mp4";
import { classes } from "istanbul-lib-coverage";

const DrinkMenu = () => {
  const style = {
    div: {
      width: "75%",
      heigh: "100%",
      textAlign: "right",
      position: "relative",
      top: "10vh",
      left: "5vw",
    },
  };

  return (
    <div style={style.div} className="item active">
      <h1>COCKTAILS</h1>

      <h4>CITRUS EL' FASHIONED</h4>
      <>
        123 Dos Reposado, Los Vecinos Mezcal, muddled grapefruit and cherry,
        orange bitters, demerara
      </>
      <h4>15</h4>
      <h4>SPICED KOYO</h4>
      <>
        St. George Spiced Pear liqueur, Wheatley vodka, lime juice, simple
        syrup, press
      </>
      <h4>12</h4>
      <h4>KYURI MULE</h4>
      <>
        Tinkerman's Shiso Cucumber Gin, yuzu juice, honey simple syrup,
        Fentiman's ginger beer
      </>
      <h4>14</h4>
      <h4>YAMI ZAKURO</h4>
      <>
        Scapegrace Gin, lemon juice, pomegranate juice, simple syrup, egg white
      </>
      <h4>13</h4>
      <h4>APPERU MANHATTAN</h4>
      <>
        Red delicious apple and cinnamon sous vide Buffalo Trace, Sazerac rye,
        carpano antica sweet vermouth, Montenegro amaro, spiced apple bitters
      </>
      <h4>15</h4>
      <h4>ICHIGO LYCHEETINI</h4>
      <>Wheatley vodka, raspberry puree, lychee juice, lime, simple syrup</>
      <h4>12</h4>
    </div>
  );
};

export default DrinkMenu;
