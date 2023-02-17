import React, { useState } from 'react'
import Globais from './Componentes/Globais' // Temos que importar as globais como qualquer outro componente 
import Info from './Componentes/info'
import info from './Componentes/info'

export default () => {

    const [resumo, setresumo] = useState(Globais.dataDeInicio)

    const gravarResumo = () =>{
        Globais.resumo = resumo
    }

    const verResumo = () => {
        alert(Globais.resumo)
    }

    return(
        <> 

            <Info/>
            <hr/>
            <p> {'Nome: ' + Globais.Nome} </p> 
            <p> {'Profissão: ' + Globais.Profissao} </p>
            <p> {'Salario: ' + Globais.Salario} </p>
            <hr/>
            <input type='text' value={resumo} onChange={(e)=> setresumo(e.target.value)}/>
            <br></br>
            <button onClick={()=> gravarResumo()}>Gravar resumo</button>
            <button onClick={()=> verResumo()}>Ver resumo</button>
           
        </>
    )
}