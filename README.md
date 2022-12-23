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
React usamos `style={{fontSize:'25px'}} `



