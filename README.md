<h1>Começando os estudos de React js</h2>

<p>O React é um lib desenvolvida pelo Facebook, ela roda JavaScript no servidor e retorna as páginas prontas, ele utiliza apenas componentes que sofrem alterações!    
</p>

<h4>O Modelo composicional</h4>

<p>O React trabalha com componentes ou seja ele cria peças de 'quebra cabeça', ex: menus, slider, navbars e etc... </p>

 
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

<strong>A cima temos uma função que retorna as duas funções a cima (um componente grande que utiliza outros componentes pequenos)</strong>