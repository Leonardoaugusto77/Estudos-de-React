## Entendendo a estrutura de uma Aplicação React

### Node Modules
![img](Screenshot_2.png)

É uma coleção de funções e objetos do JavaScript que podem ser utilizados por um aplicativo externo
(Modulos que temos importado para utilizar na aplicação)

### Public
![img](Screenshot_1.png)

Contém arquivos estáticos, como index.html, arquivos da Lib JavaScript, imagens e afins...
Tudo que está em Public é externo, nele temos o index.html responsável por renderizar
nossos componentes!

### SRC
![img](Screenshot_3.png)

É responsavel por cuidar dos nossos componentes visuais e renderiza - los na pasta public. Dentro
da pasta index.js vamos ter a seguinte estrutura:

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
Essa estrutura faz a renderização no index.html dentro de uma DIV com
ID root