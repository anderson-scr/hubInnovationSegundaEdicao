import React from 'react'
import './efeitoFundoStyle.css'

const EfeitoFundo = () => {
  const parallaxEffect = (evt) => {
    document.querySelectorAll(".quadradoPreenchido, .quadradoOutline").forEach(quadrado => {
      const valorMovimento = quadrado.getAttribute("data-multiplicador")

      const x = evt.clientX * valorMovimento / 400
      const y = evt.clientY * valorMovimento / 350
      quadrado.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  document.addEventListener("mousemove", parallaxEffect)

  return (
    <>
      <div data-multiplicador="-2" className='quadradoPreenchido qp1 profundidadeAlta'></div>
      <div data-multiplicador="6" className='quadradoPreenchido qp2 profundidadeBaixa'></div>
      <div data-multiplicador="4" className='quadradoPreenchido qp3 profundidadeMedia'></div>
      <div data-multiplicador="-6" className='quadradoPreenchido qp4 profundidadeBaixa'></div>
      <div data-multiplicador="8" className='quadradoPreenchido qp5 profundidadeAlta'></div>
      <div data-multiplicador="-4" className='quadradoPreenchido qp6 profundidadeMedia'></div>
      <div data-multiplicador="5" className='quadradoPreenchido qp7 profundidadeAlta'></div>
      <div data-multiplicador="-9" className='quadradoPreenchido qp8 profundidadeAlta'></div>
      <div data-multiplicador="5" className='quadradoPreenchido qp9 profundidadeAlta'></div>
      <div data-multiplicador="-2" className='quadradoPreenchido qp10 profundidadeMedia'></div>
      <div data-multiplicador="-2" className='quadradoPreenchido qp11 profundidadeBaixa'></div>
      <div data-multiplicador="6" className='quadradoPreenchido qp12 profundidadeBaixa'></div>
      <div data-multiplicador="4" className='quadradoPreenchido qp13 profundidadeMedia'></div>
      <div data-multiplicador="-6" className='quadradoPreenchido qp14 profundidadeAlta'></div>
      <div data-multiplicador="8" className='quadradoPreenchido qp15 profundidadeAlta'></div>

      <div data-multiplicador="-4" className='quadradoOutline qo1 profundidadeBaixa'></div>
      <div data-multiplicador="5" className='quadradoOutline qo2 profundidadeMedia'></div>
      <div data-multiplicador="-9" className='quadradoOutline qo3 profundidadeAlta'></div>
      <div data-multiplicador="5" className='quadradoOutline qo4 profundidadeBaixa'></div>
      <div data-multiplicador="-2" className='quadradoOutline qo5 profundidadeAlta'></div>
      <div data-multiplicador="6" className='quadradoOutline qo6 profundidadeBaixa'></div>
      <div data-multiplicador="-2" className='quadradoOutline qo7 profundidadeBaixa'></div>
      <div data-multiplicador="8" className='quadradoOutline qo8 profundidadeBaixa'></div>
      <div data-multiplicador="2" className='quadradoOutline qo9 profundidadeAlta'></div>
      <div data-multiplicador="-4" className='quadradoOutline qo10 profundidadeBaixa'></div>
    </>
  )
}

export default EfeitoFundo