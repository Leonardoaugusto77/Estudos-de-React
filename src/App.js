import React, { useState } from 'react'
import Carro from './Componentes/Carro'

export default () => {
  const [carro, setcarro] = useState(true)

  const mostrarOcultar = () => {
    setcarro(!carro)
  }
  
  return(
    <>
      <h1>Primeiro Componente de classe</h1>

      {carro ? <Carro fator={10}/> : ''}

      <button onClick={()=> mostrarOcultar()}>ocultar</button>
    </>
  )
}