import React, { useState } from 'react'
import Nota from './Componentes/Nota'

export default () => {
  
const [nota, setnota] = useState({'nota1' : '', 'nota2' : '' , 'nota4' : '', 'nota5' : ''})

  const handleChange = (e) => {
    if(e.target.getAttribute == 'notas'){
      setnota({'nota1' : e.target.value, 'nota2' : '', 'nota4' : '', 'nota5' : ''})
    } else if((e.target.getAttribute == 'notas2')){
      setnota({'nota1' : , 'nota2' : '', 'nota4' : '', 'nota5' : ''})
    }
  }

  return(
    <>

      <label>Digite sua nota a  baixo</label>
      <br></br>

      <Nota nota={nota} />

    </>
  )
}