# Começando os estudos de React js

O React é um lib desenvolvida pelo Facebook, ela roda JavaScript no servidor e retorna as páginas prontas, ele utiliza apenas componentes que sofrem alterações!

## O Modelo composicional

O React trabalha com componentes ou seja ele cria peças de 'quebra cabeça', ex: menus, slider, navbars e etc...

 
    function obertLinkPerfil(username){
      return 'https://github.com/' + username
    }

    function obertImagemdePerfil(username){
      return 'https://github.com/' + username + '.png?size=150'
    }

    function obertDadosPerfil(username){
      return{
        Image : obertDadosPerfil(username),
        link: obertLinkPerfil(username)
      }
    } 

<strong>A cima temos uma função que retorna as duas funções<br>
(um componente grande que utiliza outros componentes pequenos)</strong>

### Componentes Separados

```
<main/>
<article/>
<sidebar/>
```
### Componentes Combinados

```
<main>
<article/>
<sidebar/>
</main>
```

### Natureza Declarativa

<strong>Código Imperativo</strong>

<i>Código Imperativo - se preocupa em explicar como a ação é executada passo a passo</i>

```  
   const pessoa = ['Leonardo', 'Arthur', 'Gerald']
   const pessoaCopia = []
    

   for(let i = 0; i < pessoa.length; i++){
    pessoaCopia[i] = pessoa[i] + '2'
   }


   console.log(pessoaCopia)
```
 
 <i>Código Declarativo - se preocupa em como a ação vai ser executada</i>

```
   const pessoa = ['Leonardo', 'Arthur', 'Gerald']

   const pessoaCopia = pessoa.map(nome => nome + ' 2')

   console.log(pessoaCopia)
```

## Fluxo de Dados unidirecional

O componente filho não consegue alterar os dados do componente pai, somente consegue ler. Caso as informações
precissem ser alteradas no componente principal, ele ira chamar um método dentro do pai que faz essa alteração.

### Instalando o ambiente de maneira nativa e iniciando

``` npmx create-react-app my-app 
    cd my-app 
    npm run start
```


