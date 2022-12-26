## Renderização condicional

O teste condicional é realizado dependendo de um teste lógico como por exemplo o If...Else.
Vamos usar de exemplo uma função que cumprimenta o usuario atráves de um teste logico irá renderizar um Bom dia, Boa tarde ou Boa noite!

```
import React from 'react'

export default () => {
  
  const cumprimentar = () => {
    const hora = new Date().getHours()

    if(hora >= 0 && hora < 13){
      return <p>Bom dia!</p>
    } else if(hora >= 13 && hora < 18){
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  }
  
  return(
    <>
      {cumprimentar()}
    </>
  )
}
```

### Exemplo utilizando o useState

```
import React, { useState } from 'react'

export default () => {
  
  const [log, setlog] = useState(false)

  const msgLogin = () => {
      return 'Usuário Logado'
  }

  const msgLoginoff = () => {
      return 'Usuário Deslogado'
  }

  const cumprimentar = () => {
    const hora = new Date().getHours()

    if(hora >= 0 && hora < 13){
      return <p>Bom dia!</p>
    } else if(hora >= 13 && hora < 18){
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  }
  
  return(
    <>
      {cumprimentar()}

      <h4>{log ? msgLogin() : msgLoginoff()} </h4>
      <button onClick={()=> setlog(!log)}>{log ? 'Logar' : 'Deslogar'} </button>
    </>
  )
}
```

### Exemplo de Renderização condicional usando Props

```
 return(
    <>
      {cumprimentar()}

      <h4>{log ? msgLogin() : msgLoginoff()} </h4>
      <button onClick={()=> setlog(!log)}>{log ? 'Logar' : 'Deslogar'} </button>

      <Color cor1 = {Vermelho} cor2 = {Verde} cor3 = {Azul}  setcor= {setCor} statecor = {cor} />
    </>
  )
}
```

```
import React from "react";

export default (props) => {

    const retCor = (c) => {
        if(c==1){
            return props.cor1
        } else if(c==2){
            return props.cor2
        } else{
            return props.cor3
        }
    }

    const mudarCor = () => {
        props.setcor(props.statecor+1)
        if(props.statecor > 2){
            props.setcor(1)
        }
    }

    return(
        <>
            <h2 style={retCor(props.statecor)}>Leonardo Augusto - Desenvolvedor Front - end</h2>
            <button onClick={()=> mudarCor()}>Muda cor</button>
        </>
    )
}
```