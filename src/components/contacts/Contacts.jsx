import './contacts.css';
import { ReactComponent as SendSVG } from '../../assets/send.svg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contacts = () => {
   const form = useRef();

   const sendEmail = e => {
      e.preventDefault();

      emailjs.sendForm(
         'service_twx4wxf',
         'template_jyx7z6w',
         form.current,
         '-y3S-kqm45d10b78T',
      );
      e.target.reset();
   };
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
               <form ref={form} onSubmit={sendEmail} className="contacts__form">
                  <div className="contacts__form-div">
                     <label for="name" className="contacts__form-tag">
                        Name
                     </label>
                     <input
                        required
                        id="name"
                        type="text"
                        name="name"
                        className="contacts__form-input"
                        placeholder="Insert your name"
                     />
                  </div>
                  <div className="contacts__form-div">
                     <label for="email" className="contacts__form-tag">
                        Email
                     </label>
                     <input
                        required
                        id="email"
                        type="email"
                        name="email"
                        className="contacts__form-input"
                        placeholder="Insert your email"
                     />
                  </div>
                  <div className="contacts__form-div contacts__form-area">
                     <label for="project" className="contacts__form-tag">
                        Your proposal
                     </label>
                     <textarea
                        required
                        id="project"
                        type="text"
                        name="project"
                        cols="20"
                        rows="7"
                        className="contacts__form-input "
                        placeholder="Tell me about your idea"
                     />
                  </div>
                  <button
                     type="submit"
                     className="button button--flex contacts__button_xl"
                  >
                     Send Message <SendSVG />
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contacts;
