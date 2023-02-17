## Ciclo de Vida dos componentes

O clico de vida de um componente é sua inicialização, montagem. atualização e desmontagem:

1 - Primeiro o componente é configurado (Inicialização) os métodos que são chamadados são

`constructor()`
`staticgetDerivedStateFromProps()`
`render()`
`componenteDidMount()` - quando montamos um componente, se quisermos executar algo após o render, colocamos ele nesse metodo *

2 - Montagem 

3 - Quando ele é atualizado ele tem essa sequencia de comandos

`static getDerivedStateFromProps()`
`shouldComponentUpdate()`
`render()`
`getSnapshotBeforeUpdate()`
`componentDidUpdate()` * 

4 - Desmontagem, quando será removido do DOM

`componentWillUnmout()` *

em tratamentos de erros ele executada os

`static getDerivedStateFromError()`
`componentDidCatch`