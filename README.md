## Trabalhando com PROPS no React 

Props são uma maneira de enviarmos valores ou funções para outros componentes. Quando o React vê um elemento represes antado
um componente defino pelo usuário, ele passa atributos do JSX e componentes em si, vamos utilizar os atributos do componente 
os capturando através do PROPS.

![img](Screenshot_1.png)
### O que é um Componente de função?

É quando um componente em específico retorna algum tipo de função como um slider, controle de acesso, uma alteração
visual no UI da nossa aplicação e afins!


### Utilizando Props

Para usarmos o Props vamos passar atributos (propriedades) para o componenete que está dentro do nosso App.js 
usamos a seguinte sitaxe:

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

Agora dentro de dados para termos acesso ao esse atributos vamos usar `{props.nomedoatributo}`

![img](Screenshot_2.png)


### Passando funções e váriaveis para o Props

![img](Screenshot_3.png)

