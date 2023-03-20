import React from "react";

export default () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const ListaNumeros = (props) => {
    let num = props.numeros

    const listN = num.map((n,i) => <li key={i} >{n}</li>)

    return (<ul>{listN}</ul>)
  }


  return (
    <>
      <ListaNumeros numeros={numbers} />
    </>
  )
}

/* A Propriedade Key é responsavel pra indentificar qual elemento o React vai alterar */