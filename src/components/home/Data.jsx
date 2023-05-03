import { ReactComponent as HandSVG } from '../../assets/hand.svg';
import CV from '../../assets/CV_digtiarenko_2023.pdf';

const Data = () => {
   return (
      <div className="home__data">
         <h1 className="home__title">
            Valentyn Digtiarenko <HandSVG />
         </h1>
         <h3 className="home__subtitle">Full Stack Developer</h3>
         <p className="home__description">
            Hi! I'm a full stack [React, Next, Express, Node.js, ModgoDB]
            developer. I may be a newbie in IT, but certainly a seasoned player
            in the business.
         </p>

         <a
            download="digtiarenko_CV"
            href={CV}
            className="button about__button button--flex"
         >
            Download CV
            <i className="uil uil-file-download-alt cv-logo"></i>
         </a>
      </div>
   );
};

export default Data;
