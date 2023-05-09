import React from 'react'
import './sobreEventoStyle.css'
import noticia from 'assets/noticias_1evento.png'
import BarraNeon from 'components/barraNeon/barraNeon'

const SobreEvento = () => {
  return (
    <>
      <div className='mt-5'>
        <BarraNeon corNeon={'azul'}/>
      </div>
      <div className="container containerSobreEvento d-flex mb-5">
        <section className="containerTextoSobreEvento flex-grow-1">
          <h2 className="tituloUltimaEdicao">
            EM NOSSA PRIMEIRA EDIÇÃO
          </h2>
          <span className="textoSobreEvento">
            <ul>
              <li>
                <span className='textoDestaque'>+50</span> <br/>
                Palestras sobre os mais variados assuntos
              </li>
              <li>
                <span className='textoDestaque'>+1200</span> <br/>
                Participações durante o evento
              </li>
            </ul>
          </span>
        </section>

        <section className="containerImgsSobreEvento d-flex justify-content-center align-items-center">
            <img src={noticia} alt="Noticia de evento" className='imgNoticia' />
        </section>
      </div>
      <div className='container mb-5'>
        <BarraNeon corNeon={'azul'}/>
      </div>
    </>
  )
}

export default SobreEvento