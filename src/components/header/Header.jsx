import { useEffect, useRef, useState } from 'react';
import './header.css';

const Header = () => {
   /* ====== TOGGLE ======== */
   const [toggle, changeToggle] = useState(false);
   const [activeNav, setActiveNav] = useState('#home');
   const headerRef = useRef(null);

   useEffect(() => {
      const handleScroll = e => {
         if (window.scrollY > 80) {
            headerRef.current.classList.add('scroll-header');
         } else {
            headerRef.current.classList.remove('scroll-header');
         }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   return (
      <header ref={headerRef} className="header">
         <nav className="nav container">
            <a href="index.html" className="nav__logo">
               Digtiarenko
            </a>
            <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
               <ul className="nav__list grid">
                  <li className="nav__item">
                     <a
                        href="#home"
                        onClick={() => {
                           setActiveNav('#home');
                        }}
                        className={
                           activeNav === '#home'
                              ? 'nav__link active-link'
                              : 'nav__link'
                        }
                     >
                        <i className="uil uil-estate nav__icon"></i> Home
                     </a>
                  </li>
                  <li className="nav__item">
                     <a
                        onClick={() => {
                           setActiveNav('#about');
                        }}
                        href="#about"
                        className={
                           activeNav === '#about'
                              ? 'nav__link active-link'
                              : 'nav__link'
                        }
                     >
                        <i className="uil uil-user nav__icon"></i> About
                     </a>
                  </li>
                  <li className="nav__item">
                     <a
                        onClick={() => {
                           setActiveNav('#skills');
                        }}
                        className={
                           activeNav === '#skills'
                              ? 'nav__link active-link'
                              : 'nav__link'
                        }
                        href="#skills"
                     >
                        <i className="uil uil-file-alt nav__icon"></i> Skills
                     </a>
                  </li>

                  <li className="nav__item">
                     <a
                        onClick={() => {
                           setActiveNav('#portfolio');
                        }}
                        className={
                           activeNav === '#portfolio'
                              ? 'nav__link active-link'
                              : 'nav__link'
                        }
                        href="#portfolio"
                     >
                        <i className="uil uil-scenery nav__icon"></i> Portfolio
                     </a>
                  </li>
                  <li className="nav__item">
                     <a
                        href="#contacts"
                        onClick={() => {
                           setActiveNav('#contacts');
                        }}
                        className={
                           activeNav === '#contacts'
                              ? 'nav__link active-link'
                              : 'nav__link'
                        }
                     >
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
