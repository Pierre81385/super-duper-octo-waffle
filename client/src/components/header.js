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
  };
  return (
    <header
      style={style.header}
      className="text-dark mb-4 py-3 display-flex align-center"
    >
      <div style={style.content}>
        <h1 style={style.text}>"[ logo ][ title ][ admin ]"</h1>
      </div>
    </header>
  );
};

export default Header;
