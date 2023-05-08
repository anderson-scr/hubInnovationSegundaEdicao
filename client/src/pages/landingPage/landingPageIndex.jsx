import React from 'react'
import './landingPageStyle.css'
import HeaderIndex from 'components/header/headerIndex'
import ApresentacaoHome from 'components/apresentacaoHome/apresentacaoHome'
import Contador from 'components/contador/contador'

const LandingPageIndex = () => {
  return ( 
    <>
      <HeaderIndex />
      <ApresentacaoHome />
      <Contador />
    </>
  )
}

export default LandingPageIndex