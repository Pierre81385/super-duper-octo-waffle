import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  const style = {
    container: {
      width: "100%",
      heigh: "100%",
      textAlign: "right",
      position: "relative",
      left: "5vw",
      //backgroundColor: "black",
    },
    ul: {
      listStyleType: "none",
    },
  };
  return (
    <Container fluid style={style.container}>
      <Row>
        <Col className="col-6">
          <h1>About</h1>
          This is a site with a focus on demonstrating various styling. The
          primary goal was to create a site with 3-4 sections that slid across
          the screen with different video backgrounds.
          <ul style={style.ul}>
            <li>
              <h1>Technologies</h1>
            </li>
            <li>React</li>
            <li>HTML - CSS - JAVASCRIPT</li>
            <li>React Bootstrap</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
