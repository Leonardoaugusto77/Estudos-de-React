import React, { useState } from "react";
import Numeros from "./Componentes/Numeros";
import Teste from "./Componentes/Teste";

export default () =>{


  const [num, setnum] = useState(0)


  return(
    <>

    <p>Valor do State num em App : {num} </p>

    <br/>

    <Numeros num={num} setnum={setnum} />

    <br></br>

    <Teste testeN = {num} setTest = {setnum} />
    </>
  )
}