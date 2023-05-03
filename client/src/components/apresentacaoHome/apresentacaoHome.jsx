import React from 'react'
import './apresentacaoHomeStyle.css'

// Components
import EfeitoFundo from './components/efeitoFundo/efeitoFundo'
import LogoNeon from './components/logoNeon/logoNeon'
import Contador from "./components/contador/contador"

const ApresentacaoHome = () => {
  return (
    <div className='containerApresentacaoHome'>
      <div className='containerEfeitoFundo'>
        <EfeitoFundo />
      </div>
      <div className='containerTexto'>
        <LogoNeon />
      </div>
      <div className='containerContador'>
        <Contador />
      </div>
    </div>
  )
}

export default ApresentacaoHome