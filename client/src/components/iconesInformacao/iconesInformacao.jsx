import React from 'react'
import './iconesInformacaoStyle.css'
import { ReactComponent as IconeCalendario} from 'assets/icons/iconeCalendario.svg'
import { ReactComponent as IconeLocalizacao} from 'assets/icons/iconeLocalizacao.svg'
import { ReactComponent as IconeHorario} from 'assets/icons/iconeRelogio.svg'
import BarraNeon from "components/barraNeon/barraNeon"

const IconesInformacao = () => {
  return (
    <>
      <div className="container mt-5">
        <BarraNeon corNeon={'azul'} />
      </div>
      <div className="containerIconeInformacao d-flex justify-content-between align-items-center container mt-5">
        <div className="containerDataEvento d-flex text-center justify-content-center flex-column align-items-center">
          <IconeCalendario  className="iconeSvg"/>
          <span>
            DIA 26/05
          </span>
        </div>

        <div className="containerHorario d-flex text-center justify-content-center flex-column align-items-center">
          <IconeHorario className="iconeSvg" />
          <span>
            17:30 - 21:00
          </span>
        </div>

        <div className="containerLocalizacao d-flex text-center justify-content-center flex-column align-items-center">
          <IconeLocalizacao className="iconeSvg" />
          <span>
            Rua tan tan tan
          </span>
        </div>
      </div>
    </>
  )
}

export default IconesInformacao