import React from 'react'
import HeaderIndex from 'components/header/headerIndex'
import ApresentacaoHome from 'components/apresentacaoHome/apresentacaoHome'
import Contador from 'components/apresentacaoHome/components/contador/contador'

const LandingPageIndex = () => {
  return ( 
    <>
      <HeaderIndex />
      <ApresentacaoHome />
      <div className='d-flex justify-content-center'>
        <Contador />
      </div>
    </>
  )
}

export default LandingPageIndex