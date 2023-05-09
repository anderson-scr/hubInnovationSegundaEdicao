import React from 'react'
import './landingPageStyle.css'
import HeaderIndex from 'components/header/headerIndex'
import ApresentacaoHome from 'components/apresentacaoHome/apresentacaoHome'
import Contador from 'components/contador/contador'
import SobreEvento from "components/sobreEvento/sobreEvento"
import BarraNeon from "components/barraNeon/barraNeon"
import IconesInformacao from "components/iconesInformacao/iconesInformacao"
import Palestrantes from 'components/palestrantes/palestrantes'

const LandingPageIndex = () => {
  return ( 
    <>
      <HeaderIndex />
      <ApresentacaoHome />
      <Contador />
      <IconesInformacao />
      <div className='containerBackgroundImg'>
        <SobreEvento />
        <Palestrantes />
      </div>
    </>
  )
}

export default LandingPageIndex