import { useState } from 'react';
import './header.scss';

export default function Header() {

  const [enableMenu, setEnableMenu] = useState(true)
  const classActiveMenu = enableMenu ? 'header-top__menu' : 'header-top__menu active'
  const classActiveContain = enableMenu ? 'header-menu__contain' : 'header-menu__contain active'

  return (
    <>
      <header>
        <div className='header-top'>
          <button className={classActiveMenu} onClick={ () => {setEnableMenu(!enableMenu)}}>
            <div></div>
            <div></div>
            <div></div>
          </button>

          <img className='header-top__logo' src='/images/logo.png' alt='La Preuve' />

          <div className="header-top__icons">
            <ul>
              <li>
                <a href="#"><img src="/images/icons/busqueda.svg" alt="Buscar" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/icons/usuario.svg" alt="Usuario" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/icons/carrito.svg" alt="Carrito" /></a>
              </li>
            </ul>
          </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#"><strong>SALE</strong></a>
                </li>
                <li>
                    <a href="#">e-shop</a>
                </li>
                <li>
                    <a href="#">lookbook</a>
                </li>
                <li>
                    <a href="#">campaña</a>
                </li>
                <li>
                    <a href="#">locales</a>
                </li>
            </ul>
        </nav>
      </header>
      
      <div className={classActiveContain}>
        <nav>
              <ul>
                  <li>
                      <a href="#"><strong>SALE</strong></a>
                  </li>
                  <li>
                      <a href="#">e-shop</a>
                  </li>
                  <li>
                      <a href="#">lookbook</a>
                  </li>
                  <li>
                      <a href="#">campaña</a>
                  </li>
                  <li>
                      <a href="#">locales</a>
                  </li>
              </ul>
          </nav>
      </div>
    </>
  );
}