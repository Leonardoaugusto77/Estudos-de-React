import React from "react";
import Dados from "./Componentes/Dados";

export default () => {

  const idade = () =>{
    return '21 anos'
  }

  const techs = 'React js & JavaScript'

  const somar = (v1,v2) => {
    return v1 + v2
  }

  return(
    <>
     <Dados nome='Leonardo Augusto' idade={idade()} profissao='Desenvolvedor Front - end' 
     techs={techs} contato = '@Project_Heisen' somar={somar} />
    </>
  )
}