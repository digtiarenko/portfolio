import './contacts.css';
import { ReactComponent as SendSVG } from '../../assets/send.svg';
const Contacts = () => {
   return (
      <section className="contacts section" id="contacts">
         <h2 className="section__title">Contacts</h2>
         <span className="section__subtitle">Get in touch</span>
         <div className="contacts__container container grid">
            <div className="contacts__content">
               <h3 className="contacts__title">Talk to me</h3>

               <div className="contacts__info">
                  <div className="contacts__card">
                     <i className="bx bx-mail-send contacts__card-icon"></i>

                     <h3 className="contacts__card-title">Email</h3>
                     <span className="contacts__card-data">
                        baggins999@gmail.com
                     </span>
                     <a
                        href="mailto:baggins999@gmail.com"
                        className="contacts__button"
                     >
                        Write me
                        <i className="bx bx-right-arrow-alt contacts__button-icon"></i>
                     </a>
                  </div>
                  <div className="contacts__card">
                     <i className="bx bxl-telegram contacts__card-icon"></i>

                     <h3 className="contacts__card-title">Telegram</h3>
                     <span className="contacts__card-data">@oystrch</span>

                     <a
                        href="https://t.me/oystrch"
                        className="contacts__button"
                     >
                        Write me
                        <i className="bx bx-right-arrow-alt contacts__button-icon"></i>
                     </a>
                  </div>
               </div>
            </div>
            <div className="contacts__content">
               <h3 className="contacts__title">Send me an e-mail</h3>
               <form className="contacts__form">
                  <label for="name" className="contacts__form-tag">
                     Name
                  </label>
                  <input
                     id="name"
                     type="text"
                     name="name"
                     className="contacts__form-input"
                     placeholder="Insert your name"
                  />
                  <div className="contacts__form-div">
                     <label for="email" className="contacts__form-tag">
                        Email
                     </label>
                     <input
                        id="email"
                        type="email"
                        name="email"
                        className="contacts__form-input"
                        placeholder="Insert your email"
                     />
                  </div>
                  <div className="contacts__form-div">
                     <label for="project" className="contacts__form-tag">
                        Your proposal
                     </label>
                     <textarea
                        id="project"
                        type="text"
                        name="project"
                        cols="30"
                        rows="10"
                        className="contacts__form-input"
                        placeholder="Tell about ypur idea"
                     />
                  </div>
                  <button className="button button--flex">
                     Sen Message <SendSVG />
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contacts;
