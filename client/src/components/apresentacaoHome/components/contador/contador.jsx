import React, { useEffect } from 'react'
import './contadorStyle.css'
import { ReactComponent as LadoNumero } from 'assets/fundoNumeroRelogio.svg'
import Numero from "./numero"

const Contador = () => {
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
      const tempoAtual = new Date().getTime()
      const tempoAteEvento = dataEvento -  tempoAtual
      
      const dias = Math.floor(tempoAteEvento / (1000 * 60 * 60 * 24))
      const horas = Math.floor((tempoAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((tempoAteEvento % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((tempoAteEvento % (1000 * 60)) / 1000)

      console.log(`${dias} : ${horas} : ${minutos} : ${segundos}`)
    }, 1000)
  }, [])

  return (
    <>
      <Numero />
      <Numero />

      <div className="containerDoisPontos">
        <div className="ponto"></div>
        <div className="ponto"></div>
      </div>

      <Numero />
      <Numero />

      <div className="containerDoisPontos">
        <div className="ponto"></div>
        <div className="ponto"></div>
      </div>
      
      <Numero />
      <Numero />

      <div className="containerDoisPontos">
        <div className="ponto"></div>
        <div className="ponto"></div>
      </div>

      <Numero />
      <Numero />
    </>
  )
}

export default Contador;