import './footer.css';

const Footer = () => {
   return (
      <footer className=" footer">
         <div className="footer__container container">
            <h1 className="footer__title">Digtiarenko</h1>
            <ul className="footer__list">
               <li>
                  <a href="#about" className="footer__link">
                     About
                  </a>
               </li>
               <li>
                  <a href="#skills" className="footer__link">
                     Skills
                  </a>
               </li>
               <li>
                  <a href="#portfolio" className="footer__link">
                     Projects
                  </a>
               </li>
            </ul>
            <div className="footer__social">
               <a
                  href="https://www.instagram.com/oystrych"
                  className="footer__social-icon"
                  target="_blanc"
               >
                  <i className="uil uil-instagram"></i>
               </a>
               <a
                  href="https://www.linkedin.com/in/valentyn-digtiarenko"
                  className="footer__social-icon"
                  target="_blanc"
               >
                  <i className="uil uil-linkedin-alt"></i>
               </a>
               <a
                  href="https://github.com/digtiarenko"
                  className="footer__social-icon"
                  target="_blanc"
               >
                  <i className="uil uil-github-alt"></i>
               </a>
            </div>
            <span className="footer__copy">&#169;vdigtiarenko</span>
         </div>
      </footer>
   );
};

export default Footer;
