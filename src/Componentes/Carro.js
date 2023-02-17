import React from "react";

export default class Carro extends React.Component{ // está herdando do React.component

    constructor(props){ // é o primeiro metodo que será executado auto na classe quando algo for estaciado
        super(props) // Chama o construtor da classe pai
        this.modelo = 'Golf'
        this.state = {
            ligado: false,
            velAtual: 0,
        }

        this.ld = this.ligaredesligar.bind(this) // Deixa a chamada mais simplificada
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

    componentWillUnmount(){ // é chamado toda vez que o componente for removido
        console.log('O carro foi removido!')
    }


    componentDidMount(){ // só chamado uma vez após o render
        console.log("O carro foi criado!")
    }

    componentDidUpdate(){ // é chamado toda vez que o carro é atualizado
        console.log('O carro foi atualizado!')
    }

 

    render(){
        return(
            <>
                <h2>Meu carro: {this.modelo} </h2>
                <p>Ligado: {this.state.ligado === true ?  'Ligado' : 'Desligado'}</p>
                <p>Velocidade: {this.state.velAtual} KM</p>

                <br></br>

                <button onClick={this.ld}>{this.state.ligado === true ?  'Ligar carro' : 'Desligar carro'}</button>

                <button onClick={()=> this.acelerar()}>acelerar</button>
               
              
            </>
        )
    }
}