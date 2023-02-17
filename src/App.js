import React from 'react'


export default class BaseClasse extends React.Component{ // Criando o componente de classe
    constructor(props){ // Metodo que é chamado automaticamente quando criamos o componente
        // Para permitir o uso de props
        super(props) // Vai passar o props para a classe que está sendo extendido (passa o conteudo para o  React.Component)
        

        // Usando State
        this.state = { // maneira de criar os states no class
            nome: 'Leonardo Augusto',
            profissao: 'Desenvolvedor Front - end jr',
            ativo: true,
            nomeP: this.props.NomeAluno
        }
        

        this.status = this.props.status // trabalhando com props

        //Blindagem
        let ad = this.ativarDestivar.blind(this)


        // Instruções do construtor
    }


    // Função para manipular state

    ativarDestivar(){ // setstate de class
        this.setState(
            state=>({
                ativo :! state.ativo
            })
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
                <h1>Componente de classe</h1>
                
            </>
        )
    }

}