## Usando CSS dentro do React e as formas de utilização

Assim como no HTML5 podemos adicionar o CSS3 de três maneiras possiveis, porém a propria documentação official do React js
recomenda utilizar class por questões de desempenho! 

#### Inline

```
import React from "react";

export default () => {
    return(
       <>
         <div className='Container'>

          <h2 style={{color:'f00', fontSize:'25px'}} >Leonardo Augusto</h2>
          <strong>Desenvolvedor <span>Front - end</span></strong>
         </div>
       </> 
    )
}
```

A diferença de usar inline do React é que em casos que usamos - para seperar uma propriedade por exemplo o font-size, no
React usamos dessa maneira:

`style={{fontSize:'25px'}} `

outros detalhes para se destacar são que não usamos ; para indicar que a propriedade acabou e sim virgula (,)

`<h2 style={{color:'f00', fontSize:'25px'}} >Leonardo Augusto</h2>`


#### Css em um objeto literal

Equivalente ao CSS incorporado

```
import React from "react";

export default () => {

  const destaque = {
    color:'blue',
    fontSize:'20px'
  }

    return(
       <>
         <div className='Container'>

          <h2 style={{color:'f00', fontSize:'25px'}} >Leonardo Augusto</h2>
          <strong>Desenvolvedor <span style={destaque}>Front - end</span></strong>
         </div>
       </> 
    )
}
```

#### Atráves de ClasseName

```
.Container{
    width: 500px;
    height: 70vh;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    

    border-radius: 25px;
}
```

Dentro de Index.css vamos criar o estilo desejado igual a aplicações com HTML, CSS e JavaSript puro. Um detalhe é
que no React não usamos `Class:'nome';` e sim `ClassName='nome'`


