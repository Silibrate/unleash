import React, { useState } from 'react';
import header from './header.module.scss';
import headerLogo from '../../images/headerLogo.svg';
import headerBusket from '../../images/headerBusket.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState('');
  const body = document.getElementsByTagName('body');
  const handleIsMenuOpenClick = () => {
    setIsMenuOpen(isMenuOpen === `${header.active}` ? '' : `${header.active}`)
    if (isMenuOpen === header.active) {
      body[0].style.overflow = 'auto';
    } else {
      body[0].style.overflow = 'hidden';
    }
  }

  return (
    <div className={header.header}>
      <div className={`${header.container} ${header.active}`}>
        <img src={headerLogo} alt="Logo" />
        <nav className={`${header.nav} ${isMenuOpen}`}>
          <a className={header.link} href="#">Home</a>
          <a className={header.link} href="#">About</a>
          <a className={header.link} href="#">Team</a>
          <a className={header.link} href="#">Shop</a>
          <a className={header.link} href="#">Pages</a>
        </nav>
        <div className={header.info}>
          <img className={header.busket} src={headerBusket} alt="Busket" />
          <p className={header.contact}>Contact Us</p>
        </div>
        <div onClick={handleIsMenuOpenClick} className={`${header.menu} ${isMenuOpen === header.active ? header.open : ''} `}>
          <span className={`${header.icon} ${isMenuOpen === header.active ? header.bcn : ''}`}></span>
        </div>
      </div>
    </div >
  );
}

export default Header;