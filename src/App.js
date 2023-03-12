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
  fontSize: 25,
  color: '#fff',
  height: 20
}

const cssTelaRes = {
  fontSize: 50,
  color:'#fff'
}

const cssBtn = {
  fontSize: 30,
  height: 75,
  width: 75,
  padding: 20,
  backgroundColor: '#000',
  color: '#fff',
  borderColor: '#000',
  textAlign: 'center',
  outline: 'none'
}

// Componentes

const Btn = (label,onCliock) => {
  return(
    <button style={cssBtn}   >{}</button>
  )
}


const Tela = (val, res) => {
  return (
    <div style={cssTela}>
      <span style={cssTelaOper} >{val}</span>
      <span style={cssTelaRes}>{res}</span>
    </div>
  )
}


// Funções

const addDigitoTela = (d) => {
  if((d == '+' || d == '-' || d == '*' || d == '/'  ) && operacao ){
    console.log('+-*/')
    setOperacao(false)
    setvalorTela(resultado+d)
    return
  } else if (operacao){
    setvalorTela(d)
    setOperacao(false)
    return
  }

  const valorDigitado = valorTela+d
  setvalorTela(valorDigitado)
}

const limparMemoria = () => {
  setOperacao(false)
  setvalorTela('')
  setResultado(0)
  setAcumulador(0)
  return
}
  
  return(
    <>
      
    </>
  )
}