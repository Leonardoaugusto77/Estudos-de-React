import React from "react";
import Relogio from "./Componentes/Relogio";
export default () =>{

  return(
    <>

      <div className="Container">
        <Relogio/>
      </div>

      <p style={{textAlign:'center'}}>Apenas o Componente Relogio irá ser atualizado!</p>
    </>
  )
}