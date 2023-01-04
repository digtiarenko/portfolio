import React from 'react';

const Info = () => {
   return (
      <div className="about__info grid">
         <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">10+years</span>
         </div>
         <div className="about__box">
            {/* <i className="bx bx-briefcase-alt about__icon"></i> */}
            <i className="bx bx-speaker about__icon"></i>
            <h3 className="about__title">Advanced</h3>
            <span className="about__subtitle"> English speaker</span>
         </div>
         <div className="about__box">
            <i className="bx bx-glasses-alt about__icon"></i>
            <h3 className="about__title">Dedication</h3>
            <span className="about__subtitle"> 100% </span>
         </div>
      </div>
   );
};

export default Info;
