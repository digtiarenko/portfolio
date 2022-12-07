const WorksItems = ({ item }) => {
   return (
      <div className="work__card" key={item.id}>
         <img src={item.image} alt={item.title} className="work__img" />
         <h3 className="work__title">{item.title}</h3>
         <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt"></i>
         </a>
      </div>
   );
};

export default WorksItems;
