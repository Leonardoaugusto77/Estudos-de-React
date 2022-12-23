## Como funciona a renderização de componentes no React

No React é apenas renderizado os componentes que tiveram alteração assim não é necessario recarregar a página inteira, para dar 
um exemplo prático eu vou criar um relogio!!!

![img](Screenshot_2.png)

Agora dentro do Index.js vamos fazer a chamada que irá atualizar o relogio, estou colocando dentro do Index.js para
ter a certeza que eu vou estar recarregando todo o nosso App

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function tick(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}

setInterval(tick,1000)
```

Inspecionando o noss DOM vamos ver que apenas o local onde o relogio se encontra está sendo atualizado com a chamda da função tick

![img](Screenshot_4.png)
