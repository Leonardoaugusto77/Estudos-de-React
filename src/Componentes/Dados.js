import React from "react";

export default (props) => {
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Profissão: {props.profissao}</p>
            <p>Contato: {props.contato}</p>
        </section>
    )
}