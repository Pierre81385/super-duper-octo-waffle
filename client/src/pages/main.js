import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutVid from "../assets/about2.mp4";
import ConnectVid from "../assets/connect2.mp4";
import DrinksVid from "../assets/drinks2.mp4";
import musicVid from "../assets/music.mp4";
import { classes } from "istanbul-lib-coverage";
import aboutBackground from "../assets/aboutBACKGROUND.jpg";
import drinksBackground from "../assets/drinksBACKGROUND.jpg";
import musicBackground from "../assets/musicBACKGROUND.jpg";
import connectBackground from "../assets/connectBACKGROUND.jpg";

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
    aboutButtonVis: "hidden",
    drinksButtonVis: "visible",
    musicButtonVis: "visible",
    connectButtonVis: "visible",
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
      backgroundImage: `URL(${aboutBackground})`,
      backgroundSize: "auto 100%",
    },
    drinks: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.drinksIndex,
      backgroundImage: `URL(${drinksBackground})`,
      backgroundSize: "auto 100%",
    },
    music: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.musicIndex,
      backgroundImage: `URL(${musicBackground})`,
      backgroundSize: "auto 100%",
    },
    connect: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      zIndex: mainState.connectIndex,
      backgroundImage: `URL(${connectBackground})`,
      backgroundSize: "auto 100%",
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
    aboutButton: {
      zIndex: 4,
      transform: "rotate(-90deg) translateY(-50%)",
      color: "white",
      position: "fixed",
      visibility: mainState.aboutButtonVis,
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
    drinksButton: {
      zIndex: 4,
      transform: "rotate(-90deg) translateY(-50%)",
      color: "white",
      position: "fixed",
      visibility: mainState.drinksButtonVis,
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
    musicButton: {
      zIndex: 4,
      transform: "rotate(-90deg) translateY(-50%)",
      color: "white",
      position: "fixed",
      visibility: mainState.musicButtonVis,
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
    connectButton: {
      zIndex: 4,
      transform: "rotate(-90deg) translateY(-50%)",
      color: "white",
      position: "fixed",
      visibility: mainState.connectButtonVis,
      padding: "10px",
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
    overlayAbout: {
      position: "absolute",
      top: "10%",
      left: "32%",
      zIndex: 4,
      color: "white",
      alignItems: "center",
    },
    overlayDrinks: {
      position: "absolute",
      top: "10%",
      left: "42%",
      zIndex: 4,
      color: "white",
      alignItems: "center",
    },
    overlayMusic: {
      position: "absolute",
      top: "10%",
      left: "49%",
      zIndex: 4,
      color: "white",
      alignItems: "center",
    },
    overlayShare: {
      position: "absolute",
      top: "10%",
      left: "56%",
      zIndex: 4,
      color: "white",
      alignItems: "center",
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
              style={style.aboutButton}
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
                  aboutButtonVis: "hidden",
                  drinksButtonVis: "visible",
                  musicButtonVis: "visible",
                  connectButtonVis: "visible",
                });
              }}
            >
              A B O U T
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
            <div style={style.overlayAbout}>
              <p>Content above your video</p>
            </div>
          </Col>
          <Col
            className={toggleClass[mainState.drinks]}
            style={{ ...style.drinks, ...style.column }}
          >
            <Button
              variant="link"
              style={style.drinksButton}
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
                  aboutButtonVis: "visible",
                  drinksButtonVis: "hidden",
                  musicButtonVis: "visible",
                  connectButtonVis: "visible",
                });
              }}
            >
              D R I N K
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
            <div style={style.overlayDrinks}>
              <p>Content above your video</p>
            </div>
          </Col>
          <Col
            className={toggleClass[mainState.music]}
            style={{ ...style.music, ...style.column }}
          >
            <Button
              variant="link"
              style={style.musicButton}
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
                  aboutButtonVis: "visible",
                  drinksButtonVis: "visible",
                  musicButtonVis: "hidden",
                  connectButtonVis: "visible",
                });
              }}
            >
              M U S I C
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
            <div style={style.overlayMusic}>
              <p>Content above your video</p>
            </div>
          </Col>
          <Col
            className={toggleClass[mainState.connect]}
            style={{ ...style.connect, ...style.column }}
          >
            <Button
              variant="link"
              style={style.connectButton}
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
                  aboutButtonVis: "visible",
                  drinksButtonVis: "visible",
                  musicButtonVis: "visible",
                  connectButtonVis: "hidden",
                });
              }}
            >
              S H A R E
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
            <div style={style.overlayShare}>
              <p>Content above your video</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
