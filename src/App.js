import React, { useState } from "react";
import TabeladePesos from "./Componentes/TabeladePesos";
import CalculodePeso from "./Componentes/CalculodePeso";
import CSS from './index.css'


const Resultado = (r) => {
  return(
    <div>
      <p>Resultado: { r?.toFixed(2)} </p>
    </div>
  )
}




export default () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [res, setRes] = useState()



  return (
    <>
      <div className="Container">
        <h1>Calculadora IMC</h1>

        <TabeladePesos />


      <div className="Resultado">
        <CalculodePeso varP={peso} varSetP={setPeso} varA={altura} varSetA={setAltura} sr={setRes} />
      </div>

      {Resultado(res)}

      </div>

     
   
    </>
  );
};
