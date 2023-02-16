## UseEffect

O useEffect é chamado toda vez que a página é atualizada e montada

```
useEffect(
    ()=> {
      console.log('Página carregada!')
      document.title = 'Contagem ' + contagem
    } 
  )

```

O useEffect guarda as informações que ele tem que executar, quanto o state é atualizado ele att a página e assim o useEffect é executado
isso gera um pequeno delay, ele pode ser usado em componentes funcionais e hooks personalizados, não é possivel usr em componentes de classe