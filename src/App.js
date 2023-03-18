import React, { useState } from "react";

export default () => {

  // Estilos

  const tabu = {
    display: 'flex',
    flexDirection: 'column'
  }

  const tabuLinha = {
    display: 'flex',
    flexDirection: 'row'
  }

  const casa = {
    width: 100,
    minHeight: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    fontSize: 60,
    border: '1px solid #000'
  }


  const jogoInicial = [
    ['', '', ''],
    ['', '', ''], // Visualização básica do jogo
    ['', '', '']
  ]
  const [jogo, setJogo] = useState(jogoInicial)
  const [simboloAtual, setSimboloAtual] = useState('X')
  const [jogando, setJogando] = useState(true)

  const tabuleiro = (j) => {
    return (
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' onClick={(e)=>joga(e)}>{j[0][0]}</div>
          <div style={casa} data-pos='01' onClick={(e)=>joga(e)}>{j[0][1]}</div>
          <div style={casa} data-pos='02' onClick={(e)=>joga(e)}>{j[0][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='10' onClick={(e)=>joga(e)}>{j[1][0]}</div>
          <div style={casa} data-pos='11' onClick={(e)=>joga(e)}>{j[1][1]}</div>
          <div style={casa} data-pos='12' onClick={(e)=>joga(e)}>{j[1][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='20' onClick={(e)=>joga(e)}>{j[2][0]}</div>
          <div style={casa} data-pos='21' onClick={(e)=>joga(e)}>{j[2][1]}</div>
          <div style={casa} data-pos='22' onClick={(e)=>joga(e)}>{j[2][2]}</div>
        </div>
      </div>
    )
  }

  const BtnJogarNovamente = () => {
    if (!jogando) {
      return <button onClick={()=> iniciar()}>Jogar Novamente!</button>
    }

  }

  const verificaVitoria = () => {
    let pontosDiag1 = 0;
    let pontosDiag2 = 0;
    for (let i=0; i<3; i++) {
      let pontosLin = 0;
      let pontosCol = 0;
      for (let j=0; j<3; j++) {
        if (jogo[i][j] == simboloAtual) pontosLin++;
        if (jogo[j][i] == simboloAtual) pontosCol++;
        if ( (i == j) && (jogo[i][j] == simboloAtual) )     pontosDiag1++;
        if ( (i == 2-j) && (jogo[i][j] == simboloAtual) ) pontosDiag2++;
      }
      if (pontosLin >= 3 || pontosCol >= 3) return true
    }
    if (pontosDiag1 >= 3 || pontosDiag2 >= 3) return true
    return false
  }

  const trocaJogador = () => {
    simboloAtual == 'X' ? setSimboloAtual('O') : setSimboloAtual('X')
  }

  const retornaPosicao = (e) => {
    const p = e.target.getAttribute('data-pos')
    const pos = [parseInt(p.substring(0, 1), parseInt(p.substring(1, 2)))]
    return pos
  }

  const verificaEspacoVazio = (e) => {
    if (jogo[retornaPosicao(e)[0]] || [retornaPosicao(e)[1] == '']) {
      return true
    } else {
      return false
    }
  }

  const joga = (e) => {
    if (jogando) {
      if (verificaEspacoVazio(e)) {
        jogo[retornaPosicao(e)[0]] [retornaPosicao(e)[1]] = simboloAtual
        trocaJogador()
        if (verificaVitoria(e)) {
          trocaJogador()
          alert('Jogador ' + simboloAtual + 'Venceu!')
          setJogando(false)
        }
      } else {
        alert('Esse espaço está em uso')
      }
    }
  }


  const iniciar = () => {
    setJogando(true)
    setJogo(jogoInicial)
    setSimboloAtual('X')
  }


  return (
    <>

    <div>
      <p>Quem joga: {simboloAtual}</p>
    </div>
    <div>
      {tabuleiro(jogo)}
    </div>
    <div>
      {BtnJogarNovamente()}
    </div>

    </>
  )
}