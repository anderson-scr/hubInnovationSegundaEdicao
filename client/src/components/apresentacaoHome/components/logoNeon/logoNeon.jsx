import React from 'react'
import './logoNeonStyle.css'
import logo from 'assets/logoSemEfeitoSemSlogan.svg'
import {ReactComponent as OnLogo} from 'assets/onLogo.svg'

const LogoNeon = () => {
  return (
    <>
    <div className='containerLogo'>
      <span className='textoSegundo'>2º</span>
      <img className='logoEvento' src={logo} alt="Logo evento" />
      <OnLogo className='onLogoEvento' />
    </div>
    </>
  )
}

export default LogoNeon