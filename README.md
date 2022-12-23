## O que é o State?

 O State é um valor armazenado apenas em memória e que é utilizado pelo seu componente para controlar algum estado da interface, desde mostrar ou esconder um componente, apresentar valores dentro de um input, até guardar dados vindos de uma API, que são utilizados para mostrar alguma informação na interface.

 ### Criando um State

```
import React, { useState } from "react";

export default () =>{

  const [num, setnum] = useState(0)

  return(
    <>

    <p>Valor do State num : {num} </p>
     
    </>
  )
}
```

Dentro da const temos o nome do estado `num` e a função que vai mudar o estado `setnum` e por ultimo
vamos dizer que ela recebe o `useState` 

### Função que atualizado o estado 

```
import React, { useState } from "react";

export default () =>{

  const [num, setnum] = useState(0)

  return(
    <>

    <p>Valor do State num : {num} </p>
    <button onClick={()=> setnum(100)}>100</button> 
    </>
  )
}
```

Dentro de button vamos chamar o onClick com uma arrow function chamando o setnum com o valor de 100 dessa maneria será atualizada 
o valor na UI da Aplicação. O State é bem simples de ser utilizado, esse Hook é bem cotidiano no Desenvolvimento React