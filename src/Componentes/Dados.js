import React from "react";

export default (props) => {
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} </p>
            <p>Profissão: {props.profissao}</p>
            <p>Techs: {props.techs} </p>
            <p>Contato: {props.contato}</p>
        </section>
    )
}