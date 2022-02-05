import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  const style = {
    header: {
      position: "fixed",
      width: "100vw",
      //backgroundColor: "black",
      whiteSpace: "nowrap",
      zIndex: 3,
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "15%",
    },
    text: {
      color: "white",
    },

    link: {
      color: "white",
      padding: "0 30px",
      backgroundColor: "black",
    },
  };
  return (
    <header
      style={style.header}
      className="text-dark mb-4 py-3 display-flex align-center"
    >
      <Container fluid>
        <Row>
          <Col className="col-4"></Col>
          <Col className="col-4">
            <div style={style.content}>
              <h4 style={style.text}>T[-]E</h4>
              <img src={logo} alt="coffee logo" style={style.img}></img>
              <h4 style={style.text}>NIGHTCLUB</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
