import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutVid from "../assets/about2.mp4";
import ConnectVid from "../assets/connect2.mp4";
import DrinksVid from "../assets/drinks2.mp4";
import musicVid from "../assets/music.mp4";
import { classes } from "istanbul-lib-coverage";

const Main = () => {
  const [mainState, setMainState] = useState({
    about: 1,
    drinks: 0,
    music: 0,
    connect: 0,
    aboutIndex: 3,
    drinksIndex: 2,
    musicIndex: 2,
    connectIndex: 2,
    aboutVisible: "visible",
    drinksVisible: "hidden",
    musicVisible: "hidden",
    connectVisible: "hidden",
  });

  const toggleClass = ["col-1", "col-9"];

  const style = {
    column: {
      height: "100vh",
    },
    about: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.aboutIndex,
    },
    drinks: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.drinksIndex,
    },
    music: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.musicIndex,
    },
    connect: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.connectIndex,
    },
    aboutVideo: {
      position: "relative",
      objectFit: "cover",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      top: "0",
      left: "0",
      zIndex: mainState.aboutIndex,
      visibility: mainState.aboutVisible,
    },
    drinksVideo: {
      position: "relative",
      objectFit: "cover",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      top: "0",
      left: "0",
      zIndex: mainState.drinksIndex,
      visibility: mainState.drinksVisible,
    },
    musicVideo: {
      position: "relative",
      objectFit: "cover",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      top: "0",
      left: "0",
      zIndex: mainState.musicIndex,
      visibility: mainState.musicVisible,
    },
    connectVideo: {
      position: "relative",
      objectFit: "cover",
      width: "100vw",
      height: "100%",
      overflow: "hidden",
      top: "0",
      left: "0",
      zIndex: mainState.connectIndex,
      visibility: mainState.connectVisible,
    },
    button: {
      zIndex: 4,
      transform: "rotate(-90deg)",
      color: "white",
      position: "fixed",
    },
  };

  return (
    <div
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Container fluid>
        <Row>
          <Col
            className={toggleClass[mainState.about]}
            style={{ ...style.about, ...style.column }}
            id="aboutCol"
          >
            <Button
              variant="link"
              style={style.button}
              onClick={() => {
                setMainState({
                  about: 1,
                  drinks: 0,
                  music: 0,
                  connect: 0,
                  aboutIndex: 3,
                  drinksIndex: 2,
                  musicIndex: 2,
                  connectIndex: 2,
                  aboutVisible: "visible",
                  drinksVisible: "hidden",
                  musicVisible: "hidden",
                  connectVisible: "hidden",
                });
              }}
            >
              L O C A T I O N
            </Button>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              playsInline
              className={classes.Video}
              style={style.aboutVideo}
              id="about"
            >
              <source src={`${AboutVid}`} type="video/mp4" />
            </video>
          </Col>
          <Col
            className={toggleClass[mainState.drinks]}
            style={{ ...style.drinks, ...style.column }}
          >
            <Button
              variant="link"
              style={style.button}
              onClick={() => {
                setMainState({
                  about: 0,
                  drinks: 1,
                  music: 0,
                  connect: 0,
                  aboutIndex: 2,
                  drinksIndex: 3,
                  musicIndex: 2,
                  connectIndex: 2,
                  aboutVisible: "hidden",
                  drinksVisible: "visible",
                  musicVisible: "hidden",
                  connectVisible: "hidden",
                });
              }}
            >
              C O C K T A I L S
            </Button>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              playsInline
              className={classes.Video}
              style={style.drinksVideo}
              id="drinks"
            >
              <source src={`${DrinksVid}`} type="video/mp4" />
            </video>
          </Col>
          <Col
            className={toggleClass[mainState.music]}
            style={{ ...style.music, ...style.column }}
          >
            <Button
              variant="link"
              style={style.button}
              onClick={() => {
                setMainState({
                  about: 0,
                  drinks: 0,
                  music: 1,
                  connect: 0,
                  aboutIndex: 2,
                  drinksIndex: 2,
                  musicIndex: 3,
                  connectIndex: 2,
                  aboutVisible: "hidden",
                  drinksVisible: "hidden",
                  musicVisible: "visible",
                  connectVisible: "hidden",
                });
              }}
            >
              P E R F O R M A N C E S
            </Button>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              playsInline
              className={classes.Video}
              style={style.musicVideo}
              id="music"
            >
              <source src={`${musicVid}`} type="video/mp4" />
            </video>
          </Col>
          <Col
            className={toggleClass[mainState.connect]}
            style={{ ...style.connect, ...style.column }}
          >
            <Button
              variant="link"
              style={style.button}
              onClick={() => {
                setMainState({
                  about: 0,
                  drinks: 0,
                  music: 0,
                  connect: 1,
                  aboutIndex: 2,
                  drinksIndex: 2,
                  musicIndex: 2,
                  connectIndex: 3,
                  aboutVisible: "hidden",
                  drinksVisible: "hidden",
                  musicVisible: "hidden",
                  connectVisible: "visible",
                });
              }}
            >
              C O N N E C T
            </Button>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              playsInline
              className={classes.Video}
              style={style.connectVideo}
              id="connect"
            >
              <source src={`${ConnectVid}`} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
