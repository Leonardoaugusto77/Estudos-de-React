## CONTENÇÃO 

Com a contenção podemos manipular o passar outros elementos, temos esse recurso pelo motivo que as vezes não conseguimos saber quem são
os elementos filhos de outro elemento, ele é props especial. Será um Array contendo os elementos filhos do elemento que estão manipulando

Através do `{props.children}` Vamos obter os elementos filhos que foram passadas como atributos do nossos componentes:

```

    <Caixa site="Project_Heisen">
        <h2>Desenvolvedor Front - end JR</h2>
        <p>React js Developer</p>
    </Caixa>

```

`{props.children[0]}` é um array se usarmos a `[0]` podemos obter elementos separados