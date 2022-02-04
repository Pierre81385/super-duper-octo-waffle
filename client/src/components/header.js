import logo from "../assets/logo.png";

const Header = () => {
  const style = {
    header: {
      position: "fixed",
      width: "100vw",
      whiteSpace: "nowrap",
      zIndex: 4,
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "200px",
    },
    text: {
      color: "white",
    },
  };
  return (
    <header
      style={style.header}
      className="text-dark mb-4 py-3 display-flex align-center"
    >
      <div style={style.content}>
        <h1 style={style.text}>INFINIT</h1>
        <img src={logo} alt="coffee logo" style={style.img}></img>
        <h1 style={style.text}>NIGHTCLUB</h1>
      </div>
    </header>
  );
};

export default Header;
