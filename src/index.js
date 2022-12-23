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

