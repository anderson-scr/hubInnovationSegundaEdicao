import React from 'react'
import './sobreEventoStyle.css'

const SobreEvento = () => {
  return (
    <div className="container containerSobreEvento d-flex">
      <section className="containerTextoSobreEvento flex-grow-1">
        <h2 className="tituloUltimaEdicao">
          EM NOSSA ULTIMA EDIÇÃO
        </h2>
        <span className="textoSobreEvento">
          <ul>
            <li>
              Tivemos mais de 50 palestras sobre os mais variados assuntos
            </li>
            <li>
              Atingimos mais de 1200 participantes
            </li>
          </ul>
        </span>
      </section>

      <section className="containerImgsSobreEvento">
        <div className="tempImgContainer border">

        </div>
      </section>
    </div>
  )
}

export default SobreEvento