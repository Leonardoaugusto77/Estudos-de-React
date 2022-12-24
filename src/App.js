import React, { useState } from "react";
import Led from "./Componentes/Led";

export default () => {

  const [Ligado, setLigado] = useState(false)

  const cancela = (obj) =>{
    obj.preventDefault()
  }

  return(
    <>
     <Led ligar= {Ligado} mudaEstado = {setLigado} cancela={cancela} />

     <br/>

    
    </>
  )
}