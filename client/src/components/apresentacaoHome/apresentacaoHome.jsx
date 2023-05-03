import React from 'react'
import './apresentacaoHomeStyle.css'

// Components
import EfeitoFundo from './components/efeitoFundo/efeitoFundo'
import LogoNeon from './components/logoNeon/logoNeon'

const ApresentacaoHome = () => {
  return (
    <div className='containerApresentacaoHome'>
      <div className='containerEfeitoFundo'>
        <EfeitoFundo />
      </div>
      <div className='containerTexto border'>
        <LogoNeon />
      </div>
    </div>
  )
}

export default ApresentacaoHome