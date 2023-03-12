import React, { useState } from "react";

export default () => {
  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operacao, setOperacao] = useState(false);

  // Estilos
  const cssTela = {
    fontSize: 25,
    color: "#fff",
    display: "flex",
    paddingLeft: "20",
    paddingRight: "20",
    justifyContent: "center",
    alingItems: "flex-start",
    backgroundColor: "#444",
    flexDirection: "column",
    window: 260,
  };

  const cssTelaOper = {
    fontSize: 50,
    color: "#fff",
    height: 20,
  };

  const cssTelaRes = {
    fontSize: 50,
    color: "#fff",
  };

  const cssBtn = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "#000",
    textAling: "center",
    outline: "none",
  };

  // Funções

  const addDigitoTela = (digito) => {
    if (
      (digito == "+" || digito == "-" || digito == "*" || digito == "/") &&
      operacao
    ) {
      console.log("+-*/");
      setOperacao(false);
      setValorTela(resultado + digito);
      return;
    } else if (operacao) {
      setValorTela(digito);
      setOperacao(false);
      return;
    }
    const valorDigitadoTela = valorTela + digito;
    setValorTela(valorDigitadoTela);
  };

  const limparMemomoria = () => {
    setOperacao(false);
    setValorTela("");
    setResultado(0);
  };

  // Componentes
  const Tela = (valor, res) => {
    return (
      <div style={{ cssTela }}>
        <span>{valor}</span>
        <span>{res}</span>
      </div>
    );
  };

  const btn = (label, onclick) => {
    return(
      <div>
        <span style={cssTelaoper}>{valorTela}</span>
        <span style={cssTelaRes}> {resultado}</span>
      </div>
    )
  }

  return <>{Tela}</>;
};
