import React from 'react'
import './palestrantesStyle.css'
import CardPalestrante from './cardPalestrante'
import BarraNeon from 'components/barraNeon/barraNeon'

const Palestrantes = () => {
  return (
    <div className='container'>
      <h2 className='tituloUltimaEdicao'>
        PALESTRANTES
      </h2>
      <section className='containerCardsPalestrantes d-flex justify-content-center align-items-center'>
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
        <CardPalestrante />
      </section>
    </div>
  )
}

export default Palestrantes