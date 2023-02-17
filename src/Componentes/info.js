import React from 'react'
import Globais from './Globais' // Temos que importar as globais como qualquer outro componente 

export default () => {
    return(
        <>
            <p> {'Nome: ' + Globais.Nome} </p> 
            <p> {'Profissão: ' + Globais.Profissao} </p>
            <p> {'Salario: ' + Globais.Salario} </p>
            <hr/>
        </>
    )
}