import EventPoster from "../assets/eventposter.jpeg";
import { Container, Row, Col, Button } from "react-bootstrap";

const Events = () => {
  const style = {
    div: {
      width: "100%",
      heigh: "100%",
      textAlign: "left",
      position: "relative",
      top: "10vh",
      left: "5vw",
      //backgroundColor: "black",
    },
    img: {
      width: "30vw",
    },
    textDiv: {
      justifyContent: "right",
      left: "25vw",
    },
  };

  return (
    <Container fluid style={style.div}>
      <Row>
        <Col className="col-5">
          <img src={EventPoster} style={style.img}></img>
        </Col>
        <Col className="col-2"></Col>
        <Col className="col-5">
          <div style={style.textDiv}>
            <h1>JAI WOLF & SAN HOLO</h1>
            with Manila Killa, Tsu Nami
            <span></span>
            <h3>Special guests BOOGIE T</h3>
            SoDown, Minnesota, Boogie T.rio, KHVIA, Bawldy
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
