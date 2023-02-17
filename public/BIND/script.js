function carro(){
    let velMax = 200
    console.log(this.cor) // Por padrão ele aponta para o Windows
}


let detalhes = {
    cor: 'Branco',
    marca: 'VW',
    modelo : 'Golf'
}

let carroLigarDetalhes = carro.bind(detalhes) // Estou ligando o detalhes para o this 

carroLigarDetalhes() // Para dar certo temos que usar function na criação

