import React from 'react'

export default () => {

  const carros = [
    {categoria: 'Esporte', preco: '110000', modelo: 'Gof GTI'},
    {categoria: 'Esporte', preco: '1200000', modelo: 'Camaro'},
    {categoria: 'SUV', preco: '8.50000', modelo: 'HRV'},
    {categoria: 'Utilitario', preco: '110000', modelo: 'Golf'},
  ]
 

  const listaCarros = carros.map((c,i) => <p>{i} - {c.categoria}, R${c.preco}, {c.modelo} </p>)

  return(
    <>
     {listaCarros}
    </>
  )
}