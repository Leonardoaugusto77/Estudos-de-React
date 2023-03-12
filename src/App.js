import React,{useState} from "react";

export default () => {
  

// States (estados da aplicação)
const [valorTela, setvalorTela] = useState('')
const [resultado, setResultado] = useState(0)
const [acumulador, setAcumulador] = useState(0)
const [operacao, setOperacao] = useState(false)


// Estilos

const cssTela = {
  display: 'flex',
  paddingLeft: 20,
  paddingReft: 20,
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: '#444',
  flexDirection: 'column',
  window: 260
}

const cssTelaOper = {
  display: 'flex',
  paddingLeft: 20,
  paddingReft: 20,
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: '#444',
  flexDirection: 'column',
  window: 260
}


const Tela = (val, res) => {
  return (
    <div style={cssTela}>
      <span>{val}</span>
      <span>{res}</span>
    </div>
  )
}
  
  return(
    <>
      {Tela}
    </>
  )
}