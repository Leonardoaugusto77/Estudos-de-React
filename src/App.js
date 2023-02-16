import React, { useState } from 'react'

export default () => {

  const [nome, setnome] = useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }

  return(
    <>
      <label>Digite um nome:</label>
      <input type='text' value={nome} onChange={(e)=> setnome(e.target.value)}></input>
      <br></br>
      <button onClick={() => armazenar('ls_nome', nome)}>Gravar nome</button>
      <button onClick={() => consultar('ls_nome')}>Colsutar nome</button>
      <button onClick={() => apagar('ls_nome')}>Apagar nome</button>
    </>
  )
}