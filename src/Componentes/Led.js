import React from "react";
import LedVermelho from './Imgs/vermelho.png'
import LedVerde from './Imgs/verde.png'

export default (props) => {

  return(
    <>
     <div className="Container">
        <div className="leds-box">

        <img className="img-led" src={props.ligar ? LedVerde : LedVermelho}/>

        <button onClick={()=> props.mudaEstado(!props.ligar)}>{props.ligar ? 'Ligado' : 'Desligado'}</button>

        <a href="https://github.com/Leonardoaugusto77/Estudos-de-React/tree/Aula-09-Reactjs" onClick={(e)=> props.cancela(e)}>Link</a>
        </div>
     </div>
    </>
  )
}