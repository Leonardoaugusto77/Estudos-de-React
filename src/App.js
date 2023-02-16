import React, { useState } from 'react'
import Nota from './Componentes/Nota'
import Resultado from './Componentes/Resultado'

export default () => {
  
const [nota, setnota] = useState({'nota1' : '', 'nota2' : '' , 'nota3' : '', 'nota4' : ''})

  const handleChange = (e) => {
    if(e.target.getAttribute('name') == 'nota1'){
      
      setnota({'nota1' : e.target.value, 'nota2' : nota.nota2, 'nota3' : nota.nota3, 'nota4' : nota.nota4})

    } else if(e.target.getAttribute('name') == 'nota2'){
      
      setnota({'nota1' : nota.nota1, 'nota2' : e.target.value, 'nota3' : nota.nota3, 'nota4' : nota.nota4})
    
    } else if(e.target.getAttribute('name') == 'nota3'){

      setnota({'nota1' : nota.nota1, 'nota2' : nota.nota2, 'nota3' : e.target.value, 'nota4' : nota.nota4})

    } else if(e.target.getAttribute('name') ==='nota4'){ 

      setnota({'nota1' : nota.nota1, 'nota2' : nota.nota2, 'nota3' : nota.nota3, 'nota4' : e.target.value})
    
    }
  }

  return(
    <>

      <label>Digite sua nota a  baixo</label>
      <br></br>

      <Nota num={1} nome={'nota1'} notas={nota.nota1} setnota={handleChange} />
      <Nota num={2} nome={'nota2'} notas={nota.nota2} setnota={handleChange} />
      <Nota num={3} nome={'nota3'} notas={nota.nota3} setnota={handleChange} />
      <Nota num={4} nome={'nota4'} notas={nota.nota4} setnota={handleChange} />
      
      <br></br>

      <Resultado somaNotas = {parseFloat(nota.nota1)+parseFloat(nota.nota2)+parseFloat(nota.nota3)+parseFloat(nota.nota4)}/>

    </>
  )
}