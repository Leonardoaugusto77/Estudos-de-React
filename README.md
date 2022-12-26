## Manipulando Listas com o a Função Map

O MAP invoca a função callback passando por argumento cada elemento do Array e devolvendo um novo Array!

```
import React from 'react'

export default () => {

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo', 'V8', 'FORD']

  const listaCarros = carros.map((c) => <p>{c}</p>)

  return(
    <>
     {listaCarros}
    </>
  )
}
```

Listacarros vai retornar todos os elementos do Array carros em tags `<p>`. O MAP passa automaticamente os elementos como primeiro parâmetro da função, qualquer nome passado dentro da Arrow Function que é o callback da função MAP vai receber os carros.

`const listaCarros = carros.map((c) => <p>{c}</p>)`

### Retornando os carros com o indice

Outro elemento que é passado automaticamente para o MAP é o índice `const listaCarros = carros.map((c,i) => <p>{i} - {c}</p>)`
Desse jeito ele vai imprimir primeiro os carros com as suas posições dentro do array começando o zero.

### Usando JSON junto com o MAP

Quando usamos o MAP com o JSON o primeiro elemento que será passado será um objeto!

```
import React from 'react'

export default () => {

  const carros = [
    {categoria: 'Esporte', preco: '110000', modelo: 'Gof GTI'},
    {categoria: 'Esporte', preco: '1200000', modelo: 'Camaro'},
    {categoria: 'SUV', preco: '8.50000', modelo: 'HRV'},
    {categoria: 'Utilitario', preco: '110000', modelo: 'Golf'},
  ]
 

  const listaCarros = carros.map((c,i) => <p>{i} - {c}</p>)

  return(
    <>
     {listaCarros}
    </>
  )
}
```
Quando usamos o MAP com o JSON o primeiro elemento que será passado será um objeto!
