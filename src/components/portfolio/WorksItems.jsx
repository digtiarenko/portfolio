const WorksItems = ({ item }) => {
   return (
      <div className="portfolio__card" key={item.id}>
         <img src={item.image} alt={item.title} className="portfolio__img" />
         <h3 className="portfolio__title">{item.title}</h3>
         <p className="portfolio__description">{item.description}</p>
         <a href={item.link} target="_blank" className="portfolio__button">
            Demo
            <i className="bx portfolio__button-icon bx-right-arrow-alt"></i>
         </a>
      </div>
   );
};

export default WorksItems;
