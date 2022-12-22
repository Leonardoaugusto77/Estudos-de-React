import React from "react";
import Print from './Componentes/Imgs/print.png

export default () => {

  const Nome = () => {
    return 'Leonardo Augusto'
  }

  const Profissao = 'Desenvolvedor Front - end'

  return(
    <>
      <h2>Funcionario: {Nome()}</h2>
      <p>{'Profissão: ' + Profissao}</p>

      <br/>

      <img src={Print} />
    </>
  )
}