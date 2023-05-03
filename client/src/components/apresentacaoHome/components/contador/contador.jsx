import React from 'react'
import './contadorStyle.css'
import { ReactComponent as LadoNumero } from 'assets/fundoNumeroRelogio.svg'
import Numero from "./numero"

const Contador = () => {
  const referenciaNumeros = {
    1: [0, 0, 1, 0, 0, 1, 0]
  }
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