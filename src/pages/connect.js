import { Container, Row, Col, Button } from "react-bootstrap";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/instagram.png";
import Git from "../assets/GitHub_logo.png";
import Linkd from "../assets/linkedin.png";
const Connect = () => {
  const style = {
    img: {
      width: "30%",
    },
    container: {
      width: "100%",
      heigh: "100%",
      position: "relative",
      left: "5vw",
    },
    col: {
      textAlign: "left",
      verticalAlignment: "middle",
    },
    col0: {
      textAlign: "left",
    },
  };

  return (
    <Container fluid style={style.container}>
      <Row>
        <Col className="col-6" style={style.col0}>
          <img src={Facebook} style={style.img}></img>
          {/* </Col>
        <Col className="col-6" style={style.col}> */}
          F A C E B O O K
        </Col>
      </Row>

      <Row>
        <Col className="col-6" style={style.col0}>
          <img src={Linkd} style={style.img}></img>
          {/* </Col>
        <Col className="col-6" style={style.col}> */}
          L I N K D I N
        </Col>
      </Row>
      <Row>
        <Col className="col-6" style={style.col0}>
          <img src={Insta} style={style.img}></img>
          {/* </Col>
        <Col className="col-6" style={style.col}> */}
          I N S T A G R A M
        </Col>
      </Row>
    </Container>
  );
};

export default Connect;
