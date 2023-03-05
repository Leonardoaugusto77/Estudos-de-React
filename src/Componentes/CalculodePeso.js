export default (props) => {
  const Style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "right",
  };

  const InputStyle = {
    width: "200px",
    marginTop: "10px",
  };

  const Align = {
    display: "flex",
    flexDirection: "column",
    justifyContet: "center",
    textAlign: "center",
  };

  const btnStyle = {
    marginTop: "15px",
    alignItems: "center",
  };

  const calc = () => {
    props.sr(props.varP / (props.varA * props.varA));
  };

  return (
    <div>
      <label style={Style}>
        Peso{" "}
        <input
          type="text"
          value={props.varP}
          onChange={(e) => {
            props.varSetP(e.target.value);
          }}
          style={InputStyle}
        ></input>
      </label>

      <label style={Style}>
        Altura{" "}
        <input
          type="text"
          value={props.varA}
          onChange={(e) => {
            props.varSetA(e.target.value);
          }}
          style={InputStyle}
        ></input>
      </label>

      <div style={Align}>
        <button onClick={calc()} style={btnStyle}>
          Calcular
        </button>
      </div>
    </div>
  );
};
