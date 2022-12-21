## Começando os estudos de React js

O React é um lib desenvolvida pelo Facebook, ela roda JavaScript no servidor e retorna as páginas prontas, ele utiliza apenas componentes que sofrem alterações!

## O Modelo composicional

## O React trabalha com componentes ou seja ele cria peças de 'quebra cabeça', ex: menus, slider, navbars e etc...

 
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

<strong>A cima temos uma função que retorna as duas funções a cima <br>
(um componente grande que utiliza outros componentes pequenos)</strong>

<h4>Componentes Separados</h4>

```
<main/>
<article/>
<sidebar/>
```
<h4>Componentes Combinados</h4>

```
<main>
<article/>
<sidebar/>
</main>
```

<h4>Natureza Declarativa</h4>

<strong>Código Imperativo</strong>

<i>Imperativo - se preocupa em explicar como a ação é executada passo a passo</i>

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



