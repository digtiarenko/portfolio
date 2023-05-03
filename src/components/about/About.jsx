import './about.css';
import AboutImg from '../../assets/profile_2.jpg';
import { ReactComponent as SendSVG } from '../../assets/send.svg';
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
                  tech skills backed by management and communications skills
                  gained during 8+years on editors and directors positions.
               </p>

               <a href="#contacts" className="button button--flex">
                  Say Hello <SendSVG />
               </a>
            </div>
         </div>
      </section>
   );
};

export default About;
