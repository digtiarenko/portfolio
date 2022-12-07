import { useState } from 'react';
import './header.css';

const Header = () => {
   /* ====== TOGGLE ======== */
   const [toggle, changeToggle] = useState(false);

   return (
      <header className="header">
         <nav className="nav container">
            <a href="index.html" className="nav__logo">
               Digtiarenko
            </a>
            <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
               <ul className="nav__list grid">
                  <li className="nav__item">
                     <a href="#home" className="nav__link ">
                        <i className="uil uil-estate nav__icon"></i> Home
                     </a>
                  </li>
                  <li className="nav__item">
                     <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> About
                     </a>
                  </li>
                  <li className="nav__item">
                     <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i> Skills
                     </a>
                  </li>

                  <li className="nav__item">
                     <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i> Portfolio
                     </a>
                  </li>
                  <li className="nav__item">
                     <a href="#contacts" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> Contacts
                     </a>
                  </li>
               </ul>
               <i
                  className="uil uil-times nav__close"
                  onClick={() => changeToggle(!toggle)}
               ></i>
            </div>
            <div className="nav__toggle" onClick={() => changeToggle(!toggle)}>
               <i className="uil uil-apps"></i>
            </div>
         </nav>
      </header>
   );
};

export default Header;
