## Eventos no React 

Manipular eventos no React é semelhante ao JavaSript puro, com a diferença de sintaxe. Os eventos são nomeado com camelcase ao invés de letras minusculas, com o JSX você passa uma função como manipulador de eventos no lugar de um texto.

### Criando um evento simples

Vamos criar um evento que vai mudar um led na nossa UI, Verde para ligado e Vermelho para desligado:

```
import React, { useState } from "react";
import LedVermelho from './Componentes/Imgs/vermelho.png'
import LedVerde from './Componentes/Imgs/verde.png'

export default () => {

  const [Ligado, setLigado] = useState(false)

  return(
    <>
     <div className="Container">
        <div className="leds-box">

        <img className="img-led" src={Ligado ? LedVerde : LedVermelho}/>

        <button onClick={()=> setLigado(!Ligado)}>{Ligado ? 'Ligado' : 'Desligado'}</button>
        </div>
     </div>
    </>
  )
}
```

Como é um evento que muda uma parte da nossa aplicação, vamos usar o `useState()`. Dentro do 
`<button>` vamos colocar um evento `onClick` com expressão já que vamos adicionar um evento JavaScript,
passamos um Arrow Function para fazer a chamada de `setLigado` passando como `value` o ligado invertido, se o 
valor for false ele passa a ser true e ser true passa a ser false, assim ligando e desligando o Led!

### Operador Ternario

Dentro de `<button>` temos o operador ternário `<button onClick={()=> setLigado(!Ligado)}>{Ligado ? 'Ligado' : 'Desligado'}</button>`
que vai alterar a String do botão para ligado ou desligado!

### Como cancelar um comportamente de um Link

Agora vamos estudar como utilizar o `preventDefault()`, ele serve para cancelarmos um comportamento um exemplo, podemos criar um trecho
de código que identifica se o Usuário preencheu os campos do formulário corretamente, caso não cancelamos a execução e pedimos que ele digite novamente.

```
import React, { useState } from "react";
import Led from "./Componentes/Led";

export default () => {

  const [Ligado, setLigado] = useState(false)

  const cancela = (obj) =>{
    obj.preventDefault()
  }

  return(
    <>
     <Led ligar= {Ligado} mudaEstado = {setLigado} cancela={cancela} />

     <br/>

    
    </>
  )
}
```  

### Componente Led 

```
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
```

Usamos o `preventDefault()` da seguinte maneira, primeiro passando um parâmetro para a função que irá chama - lo,
e falamos que o obj recebe o `preventDefault()` `obj.preventDefault()`, agora dentro da função `onClick={(e)=> props.cancela(e)}>` vamos passar o próprio componente como parâmetro que é o `(e)`

