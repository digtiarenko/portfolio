import './contacts.css';

const Contacts = () => {
   return (
      <section className="contacts section" id="contacts">
         <h2 className="section__title">Contacts</h2>
         <span className="section__subtitle">Get in touch</span>
         <div className="contacts__container container grid">
            <div className="contacts__content">
               <h3 className="contacts__title">Tals to me</h3>

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
            </div>
         </div>
      </section>
   );
};

export default Contacts;
