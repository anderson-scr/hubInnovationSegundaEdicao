import React, { useEffect, useState } from 'react'
import './contadorStyle.css'
import Numero from "./numero"

const Contador = () => {
  const [tempoAtual, setTempoAtual] = useState({
    'dias': [0, 0],
    'horas': [0, 0],
    'minutos': [0, 0],
    'segundos': [0, 0]
  });
  const referenciaNumeros = {
    1: [0, 0, 1, 0, 0, 1, 0],
    2: [1, 0, 1, 1, 1, 0, 1],
    3: [1, 0, 1, 1, 0, 1, 1],
    4: [0, 1, 1, 1, 0, 1, 0],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 1, 0, 1, 1, 1, 1],
    7: [1, 0, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 0],
    0: [0, 0, 0, 0, 0, 0, 0]
  }
  useEffect(() => {
    const dataEvento = new Date(`Jun 20, 2023 00:00:00`).getTime() 

    const setTimer = setInterval(() => {
      const curTime = new Date().getTime()
      const tempoAteEvento = dataEvento -  curTime
      
      const dias = Math.floor(tempoAteEvento / (1000 * 60 * 60 * 24)).toString()
      const horas = Math.floor((tempoAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString()
      const minutos = Math.floor((tempoAteEvento % (1000 * 60 * 60)) / (1000 * 60)).toString()
      const segundos = Math.floor((tempoAteEvento % (1000 * 60)) / 1000).toString()

      const novoValor = {
        'dias': [dias[0], dias[1]],
        'horas': [horas[0], horas[1]],
        'minutos': [minutos[0], minutos[1]],
        'segundos': [segundos[0], segundos[1]]
      }
      setTempoAtual(novoValor)
      console.log(tempoAtual)
    }, 1000)
  }, [])

  return (
    <>
      <Numero numero={referenciaNumeros[tempoAtual.dias[0]]} />
      <Numero numero={referenciaNumeros[tempoAtual.dias[1]]}/>

      <div className="containerDoisPontos">
        <div className="ponto"></div>
        <div className="ponto"></div>
      </div>

      <Numero numero={referenciaNumeros[tempoAtual.horas[0]]} />
      <Numero numero={referenciaNumeros[tempoAtual.horas[1]]} />

      <div className="containerDoisPontos">
        <div className="ponto"></div>
        <div className="ponto"></div>
      </div>
      
      <Numero numero={referenciaNumeros[tempoAtual.minutos[0]]}/>
      <Numero numero={referenciaNumeros[tempoAtual.minutos[1]]}/>

      <div className="containerDoisPontos">
        <div className="ponto"></div>
        <div className="ponto"></div>
      </div>

      <Numero numero={referenciaNumeros[tempoAtual.segundos[0]]}/>
      <Numero numero={referenciaNumeros[tempoAtual.segundos[1]]}/>
    </>
  )
}

export default Contador;