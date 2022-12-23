import React from "react";

export default (props) => {
    
    let n1, n2
    n1 = 10
    n2 = 10

    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} </p>
            <p>Profissão: {props.profissao}</p>
            <p>Contato: {props.contato}</p>
        
        
            <br/>

            <div>

                {'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)} 

            </div>
        
        </section>
    )
}