import React, { useState } from 'react'

export default () => {

  const [nome, setnome] = useState('')
  const [carro, setcarro] = useState('')

  const handleChangeNome = (e) => {
    setnome(e.target.value)
  }

  return(
    <>
      <label>Digite seu nome:</label>
      <input type='text' name='fnome' value={nome} onChange={(e)=> handleChangeNome(e) } />
      <p>Nome digitado: {nome} </p>
      <label>Selecione um carro</label>
      <select values={carro} onChange={(e)=> setcarro(e.target.value)}>
        <option value='HRV'>HRV</option>
        <option value='FOX'>FOX</option>
        <option value='Ford'>Ford</option>
        <option value='Porsche'>Porsche</option>
      </select>

      <p>Carro selecionado {carro} </p>
    </>
  )
}