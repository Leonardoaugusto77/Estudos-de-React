import React from "react";

export default class Classe extends React.Component{ // está herdando do React.component

    constructor(props){ // é o primeiro metodo que será executado auto na classe quando algo for estaciado
        super(props) // Chama o construtor da classe pai
    }

    render(){
        return(
            <>
                <h2>Olá, isso é um componente de classe</h2>
                <p>Nome: {this.props.nome} </p>
            </>
        )
    }
}