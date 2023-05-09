import React from 'react'

const CardPalestrante = () => {
  return (
    <div className='containerCardPalestrante'>
      <div className='backgroundFixo'>
        <div className='containerFadeBg d-flex justify-content-end flex-column'>
          <span className='nomePalestrante'>Marcela Sampaio</span>
          <span>Uma breve descricao sobre o palestrante e seu assunto.</span>
        </div>
      </div>
    </div>
  )
}

export default CardPalestrante