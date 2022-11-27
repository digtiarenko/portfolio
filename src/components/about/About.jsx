import './about.css';
import AboutImg from '../../assets/profile_2.jpg';
import CV from '../../assets/digtiarenko_2022.pdf';
import Info from './Info';

const About = () => {
   return (
      <section className="about section" id="about">
         <h2 className="section__title">About Me</h2>
         <span className="section__subtitle">My introduction</span>

         <div className="about__container container grid">
            <img className="about__img" src={AboutImg} alt="" />
            <div className="about__data">
               <Info />
               <p className="about__description">
                  Passionate and experienced media guy goes IT. Bringing forth
                  10+ years experience of communication, planning and
                  coordination skills gained on editors and directors positions.
                  I know how to be a team player ;)
               </p>

               <a
                  download="digtiarenko_CV"
                  href={CV}
                  className="button button--flex"
               >
                  Download CV
                  <i className="uil uil-file-download-alt"></i>
               </a>
            </div>
         </div>
      </section>
   );
};

export default About;
