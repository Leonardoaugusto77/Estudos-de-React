import React, { useState } from "react";

export default () => {
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState()
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)


  // Elementos visuais
  const Tela = (valor, res) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }

  const btn = (label, onClick) => {
    return (
      <button style={cssBtn} onClick={onClick} >{label}</button>
    )
  }

  // Funções
  const addDigitoTela = (d) => {
    if ((d === '+' || d === '-' || d === '*' || d === '/') && operado) {
      console.log('+-*/')
      setOperado(false)
      setValorTela(resultado + d)
      return
    } else if (operado) {
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao = (oper) => {
    if (oper == 'bs') {
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try {
      const r = eval(valorTela) // calc
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    } catch {
      setResultado('ERRO!!!')
    }
  }

  // Estilos
  const CSScontainer = {
    width: 300,
    margin: 'auto',
    border: '1px solid #000',
    textAlign: 'center'
  }

  const cssBotoes = {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alingItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    height: '75px',
    width: 260
  }

  const cssTelaOper = {
    fontSize: 25,
    color: '#fff',
    height: 20,
  }

  const cssTelaRes = {
    fontSize: 50,
    color: '#fff'
  }

  const cssBtn = {
    fontSize: 30,
    height: 75,
    width: 75,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
  }


  return (
    <div style={CSScontainer}>

      <h3>Calculadora com React js</h3>

      {Tela(valorTela, resultado)}

      <div style={cssBotoes}>
        {btn('AC', limparMemoria)}
        {btn('(', () => addDigitoTela('('))}
        {btn(')', () => addDigitoTela(')'))}
        {btn('/', () => addDigitoTela('/'))}
        {btn('7', () => addDigitoTela('7'))}
        {btn('8', () => addDigitoTela('8'))}
        {btn('9', () => addDigitoTela('9'))}
        {btn('*', () => addDigitoTela('*'))}
        {btn('4', () => addDigitoTela('4'))}
        {btn('5', () => addDigitoTela('5'))}
        {btn('6', () => addDigitoTela('6'))}
        {btn('-', () => addDigitoTela('-'))}
        {btn('1', () => addDigitoTela('1'))}
        {btn('2', () => addDigitoTela('2'))}
        {btn('3', () => addDigitoTela('3'))}
        {btn('+', () => addDigitoTela('+'))}
        {btn('0', () => addDigitoTela('0'))}
        {btn('.', () => addDigitoTela('.'))}
        {btn('<-', () => Operacao('bs'))}
        {btn('=', () => Operacao('='))}
      </div>

    </div>
  )
}