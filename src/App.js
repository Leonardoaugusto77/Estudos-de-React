import React, { useState } from "react";
import TabeladePesos from "./Componentes/TabeladePesos";
import CalculodePeso from "./Componentes/CalculodePeso";
import CSS from './index.css'

export default () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  return (
    <>
      <div className="Container">
        <h1>Calculadora IMC</h1>

        <TabeladePesos />


      <div className="Resultado">
        <CalculodePeso varP={peso} varSetP={setPeso} varA={altura} varSetA={setAltura} />
      </div>

      </div>
    </>
  );
};
