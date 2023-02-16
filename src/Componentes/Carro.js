import React from "react";

export default class Carro extends React.Component{ // está herdando do React.component

    constructor(props){ // é o primeiro metodo que será executado auto na classe quando algo for estaciado
        super(props) // Chama o construtor da classe pai
        this.modelo = 'Golf'
        this.state = {
            ligado: false,
            velAtual: 0,

        }
    }

    ligar(){
        // this.setState.ligado = true // Dessa maneira ele não rederiza

        this.setState({ligado: true})
    }
    desligar(){
        // this.setState.ligado = true // Dessa maneira ele não rederiza

        this.setState({ligado: false})
    }

    ligaredesligar(){
        // this.setState({ligado: !this.state.ligado})
        this.setState(
            (state) =>({
                ligado: ! state.ligado
            }
        ))
    }

    acelerar(){ // Função que vai realizar a nossa atualização, existem casos (matematicos) que o state só funciona se estiver com uma callback
        this.setState(
            (state, props) => (
                {velAtual: state.velAtual + props.fator}
            )
        )
    }

    render(){
        return(
            <>
                <h2>Meu carro: {this.modelo} </h2>
                <p>Ligado: {this.state.ligado === true ?  'Ligado' : 'Desligado'}</p>
                <p>Velocidade: {this.state.velAtual} KM</p>

                <br></br>

                <button onClick={()=> this.ligaredesligar()}>{this.state.ligado === true ?  'Ligar carro' : 'Desligar carro'}</button>

                <button onClick={()=> this.acelerar()}>acelerar</button>
            </>
        )
    }
}