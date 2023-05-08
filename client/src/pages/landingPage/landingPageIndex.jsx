import React from 'react'
import './landingPageStyle.css'
import HeaderIndex from 'components/header/headerIndex'
import ApresentacaoHome from 'components/apresentacaoHome/apresentacaoHome'
import Contador from 'components/contador/contador'
import SobreEvento from "components/sobreEvento/sobreEvento"
import BarraNeon from "components/barraNeon/barraNeon"
import IconesInformacao from "components/iconesInformacao/iconesInformacao"

const LandingPageIndex = () => {
  return ( 
    <>
      <HeaderIndex />
      <ApresentacaoHome />
      <Contador />
      <IconesInformacao />
      <SobreEvento />
      <div className="d=flex justify-content-evenly mb-5">
        <BarraNeon corNeon={'azul'}/>
        <BarraNeon corNeon={'rosa'}/>
      </div>
    </>
  )
}

export default LandingPageIndex