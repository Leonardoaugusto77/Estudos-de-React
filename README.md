## Trabalhando com Props no React 

Props são uma maneira de enviarmos valores ou funções para outros componentes. Quando o React vê um elemento representado
um componente defino pelo usuário, ele passa atributos do JSX e componentes em si, vamos utilizar os atributos do componente 
os capturando através do Props.

```
import React from "react";

export default (props) => {
    return(
        <section>
            <p>Nome: </p>
            <p>Profissão: </p>
            <p>Contato: </p>
        </section>
    )
}
```
### O que é um Componente de função?

É quando um componente em específico retorna algum tipo de função como um slider, controle de acesso, uma alteração
visual no UI da nossa aplicação e afins!


### Utilizando Props

Para usarmos o Props vamos passar atributos (propriedades) para o componente que está dentro do nosso App.js 
usamos a seguinte sintaxe:

``` 
import React from "react";
import Dados from "./Componentes/Dados";

export default () => {

  return(
    <>
     <Dados nome='Leonardo Augusto' profissao='Desenvolvedor Front - end' contato = '@Project_Heisen'/>
    </>
  )
}
```

Agora dentro de dados para termos acesso a esse atributo vamos usar `{props.nomedoatributo}`

```
import React from "react";

export default (props) => {
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Profissão: {props.profissao}</p>
            <p>Contato: {props.contato}</p>
        </section>
    )
}
```


### Passando funções e variáveis para o Props

```
import React from "react";
import Dados from "./Componentes/Dados";

export default () => {

  const idade = () =>{
    return '21 anos'
  }

  const techs = 'React js & JavaScript'

  return(
    <>
     <Dados nome='Leonardo Augusto' idade={idade()} profissao='Desenvolvedor Front - end' techs={techs} contato = '@Project_Heisen'/>
    </>
  )
}
```

```
import React from "react";

export default (props) => {
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} </p>
            <p>Profissão: {props.profissao}</p>
            <p>Techs: {props.techs} </p>
            <p>Contato: {props.contato}</p>
        </section>
    )
}
```
### Criando uma função simples de somar com Props

```
import React from "react";
import Dados from "./Componentes/Dados";

export default () => {

  const idade = () =>{
    return '21 anos'
  }

  const techs = 'React js & JavaScript'

  const somar = (v1,v2) => {
    return v1 + v2
  }

  return(
    <>
     <Dados nome='Leonardo Augusto' idade={idade()} profissao='Desenvolvedor Front - end' 
     techs={techs} contato = '@Project_Heisen' somar={somar} />
    </>
  )
}

```

```
import React from "react";

export default (props) => {
    
    let n1, n2
    n1 = 10
    n2 = 10

    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} </p>
            <p>Profissão: {props.profissao}</p>
            <p>Contato: {props.contato}</p>
        
        
            <br/>

            <div>

                {'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)} 

            </div>
        
        </section>
    )
}

```
