import React, { useState } from 'react'
import Color from './Componentes/Color.js'

export default () => {
  
  const [cor, setCor] = useState(0)

  const Vermelho = {
    color: '#f00'
  }
  const Verde = {
    color: '#0f0'
  }
  const Azul = {
    color: '#00f'
  }
  


  const [log, setlog] = useState(false)

  const msgLogin = () => {
      return 'Usuário Logado'
  }

  const msgLoginoff = () => {
      return 'Usuário Deslogado'
  }

  const cumprimentar = () => {
    const hora = new Date().getHours()

    if(hora >= 0 && hora < 13){
      return <p>Bom dia!</p>
    } else if(hora >= 13 && hora < 18){
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  }
  
  return(
    <>
      {cumprimentar()}

      <h4>{log ? msgLogin() : msgLoginoff()} </h4>
      <button onClick={()=> setlog(!log)}>{log ? 'Logar' : 'Deslogar'} </button>

      <Color cor1 = {Vermelho} cor2 = {Verde} cor3 = {Azul}  setcor= {setCor} statecor = {cor} />
    </>
  )
}