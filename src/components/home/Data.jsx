import React from 'react';
import { ReactComponent as HandSVG } from '../../assets/hand.svg';
import { ReactComponent as SendSVG } from '../../assets/send.svg';

const Data = () => {
   return (
      <div className="home__data">
         <h1 className="home__data">
            Valentyn Digtiarenko <HandSVG />
         </h1>
         <h3 className="home__subtitle">_Full-Stack developer</h3>
         <p className="home_description">
            Passionate and experienced media guy goes IT. Bringing forth 10+
            years experience of communication, planning and coordination skills
            gained on editors and directors positions.
         </p>

         <a href="#contact" className="button button--flex">
            Say Hello <SendSVG />
         </a>
      </div>
   );
};

export default Data;
