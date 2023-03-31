const WorksItems = ({ item }) => {
   return (
      <div className="portfolio__card" key={item.id}>
         <img src={item.image} alt={item.title} className="portfolio__img" />
         <h3 className="portfolio__title">{item.title}</h3>
         <div className="portfolio__text-wrappe">
            <p className="portfolio__description">{item.description}</p>
            <div className="link__wrapper">
               <a
                  href={item.link}
                  target="_blank"
                  className="portfolio__button"
                  rel="noreferrer"
               >
                  webpage
                  <i className="bx portfolio__button-icon bx-right-arrow-alt"></i>
               </a>
               <a
                  href={item.github}
                  target="_blank"
                  className="portfolio__button"
                  rel="noreferrer"
               >
                  github
                  <i className="bx portfolio__button-icon bx-right-arrow-alt"></i>
               </a>
            </div>
         </div>
      </div>
   );
};

export default WorksItems;
