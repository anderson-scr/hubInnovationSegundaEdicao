import React, { useState } from 'react'
import logoHubHeader from 'assets/logoSemEfeitoSemSlogan.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './headerStyle.css'

const HeaderIndex = () => {
  const [navbarColor, setNavbarColor] = useState(false)

  window.addEventListener("scroll", () => {
    window.scrollY >= 60? setNavbarColor(true) : setNavbarColor(false)
  })

  return (
    <header className={navbarColor? 'header background' : 'header'}>
      <div className='container d-flex justify-content-between'>
        <div className='containerNavLogo d-flex align-items-center'>
          <div className='containerLogo'>
            <img src={logoHubHeader} alt="Logo Hub Innovation" className='logoHeader' />
          </div>
          <nav className='containerNav d-flex align-items-center w-100'>
            <ul className='d-flex justify-content-evenly align-items-center w-75'>
              <li className="opcoesNav">
                <button className='btnNav'>HOME</button>
              </li>
              <li className="opcoesNav">
                <button className='btnNav'>SOBRE O EVENTO</button>
              </li>
              <li className="opcoesNav">
                <button className='btnNav'>PALESTRANTES</button>
              </li>
              <li className="opcoesNav">
                <button className='btnNav'>PARCEIROS</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className='containerBtnsLogin d-flex align-items-center'>
          <button className='btnInscreva'>Inscreva-se</button>
          <button className='btnLogin'>Log in</button>
        </div>
      </div>
    </header>
  )
}

export default HeaderIndex