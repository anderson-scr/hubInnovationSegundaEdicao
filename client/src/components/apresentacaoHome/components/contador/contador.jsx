import React, { useEffect, useRef, useState } from 'react'
import './contadorStyle.css'
import Numero from "./numero"

const Contador = () => {
  const effectOnce = useRef(true)
  
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  
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
    0: [1, 1, 1, 0, 1, 1, 1]
  }

  const calcularTempo = () => {
    const dataEvento = new Date(`Jun 20, 2023 00:00:00`).getTime() 
  
    setInterval(() => {
      const curTime = new Date().getTime()
      const tempoAteEvento = dataEvento - curTime
      
      const dias = Math.floor(tempoAteEvento / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
      const horas = Math.floor((tempoAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
      const minutos = Math.floor((tempoAteEvento % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
      const segundos = Math.floor((tempoAteEvento % (1000 * 60)) / 1000).toString().padStart(2, '0')
      
      setDays(dias)
      setHours(horas)
      setMinutes(minutos)
      setSeconds(segundos)
    }, 1000)
  }

  useEffect(() => {
    if(effectOnce.current) {
      calcularTempo()
      return () => effectOnce.current = false
    }
  }, [])
  useEffect(() => {
    console.log(`${days}.${hours}.${minutes}.${seconds}`)
  }, [seconds])

  return (
    <> 
      {days &&
        <div className='d-flex justify-content-center'>
          <Numero numero={referenciaNumeros[days[0]]}/>
          <Numero numero={referenciaNumeros[days[1]]}/>
    
          <div className="containerDoisPontos">
            <div className="ponto"></div>
            <div className="ponto"></div>
          </div>

          <Numero numero={referenciaNumeros[hours[0]]}/>
          <Numero numero={referenciaNumeros[hours[1]]}/>
    
          <div className="containerDoisPontos">
            <div className="ponto"></div>
            <div className="ponto"></div>
          </div>
          
          <Numero numero={referenciaNumeros[minutes[0]]}/>
          <Numero numero={referenciaNumeros[minutes[1]]}/>
    
          <div className="containerDoisPontos">
            <div className="ponto"></div>
            <div className="ponto"></div>
          </div>
    
          <Numero numero={referenciaNumeros[seconds[0]]}/>
          <Numero numero={referenciaNumeros[seconds[1]]}/>
        </div>
      }
    </>
  )
}

export default Contador;