import { ReactComponent as HandSVG } from '../../assets/hand.svg';
import { ReactComponent as SendSVG } from '../../assets/send.svg';

const Data = () => {
   return (
      <div className="home__data">
         <h1 className="home__title">
            Valentyn Digtiarenko <HandSVG />
         </h1>
         <h3 className="home__subtitle">Full Stack Developer</h3>
         <p className="home__description">
            Hi! I'm a junior [React, Node.js] developer. I may be newbie in IT,
            but certainly a seasoned player in business.
         </p>

         <a href="#contacts" className="button button--flex">
            Say Hello <SendSVG />
         </a>
      </div>
   );
};

export default Data;
