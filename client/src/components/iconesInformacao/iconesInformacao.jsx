import React from 'react'
import './iconesInformacaoStyle.css'
import { ReactComponent as IconeCalendario} from 'assets/icons/iconeCalendario.svg'
import { ReactComponent as IconeLocalizacao} from 'assets/icons/iconeLocalizacao.svg'
import { ReactComponent as IconeHorario} from 'assets/icons/iconeRelogio.svg'
import { ReactComponent as IconePessoas} from 'assets/icons/iconePessoas.svg'
import { ReactComponent as IconeRocket} from 'assets/icons/iconeRocket.svg'

import BarraNeon from "components/barraNeon/barraNeon"

const IconesInformacao = () => {
  return (
    <>
      <div className="container mt-5">
        <BarraNeon corNeon={'rosa'} />
      </div>
      <div className="containerIconeInformacao d-flex justify-content-between align-items-center container mt-5">
        <div className="containerDataEvento d-flex text-center justify-content-center flex-column align-items-center">
          <IconeCalendario  className="iconeSvg"/>
          <span className='mt-2'>
            Dia<br />21 de Junho de 2023
          </span>
        </div>

        <div className="containerHorario d-flex text-center justify-content-center flex-column align-items-center">
          <IconeHorario className="iconeSvg" />
          <span className='mt-2'>
            Horário:<br />17:30 - 21:00
          </span>
        </div>

        <div className="containerLocalizacao d-flex text-center justify-content-center flex-column align-items-center">
          <IconeLocalizacao className="iconeSvg" />
          <span className='mt-2'>
            Senac Hub Academy <br />
            R. do Parque, 75 - Centro
          </span>
        </div>

        <div className="containerLocalizacao d-flex text-center justify-content-center flex-column align-items-center">
          <IconePessoas className="iconeSvg" />
          <span className='mt-2'>
            Empresarios <br />
            Profissionais <br />
            Estudantes <br />
            Universitarios
          </span>
        </div>

        <div className="containerLocalizacao d-flex text-center justify-content-center flex-column align-items-center">
          <IconeRocket className="iconeSvg" />
          <span className='mt-2'>
            Palestrantes <br />
            Workshops <br />
            Network
          </span>
        </div>
      </div>
    </>
  )
}

export default IconesInformacao