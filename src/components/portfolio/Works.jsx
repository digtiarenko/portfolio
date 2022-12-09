import { useState, useEffect } from 'react';
import { projectData, projectNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
   const [item, setItem] = useState('all');
   const [projects, setProjects] = useState([]);
   const [active, setActive] = useState(0);

   const handleClick = (e, index) => {
      setItem(e.target.textContent.toLowerCase());
      setActive(index);
   };

   useEffect(() => {
      if (item === 'all') {
         setProjects(projectData);
      } else {
         const newProjects = projectData.filter(
            project => project.category.toLowerCase() === item,
         );
         setProjects(newProjects);
      }
   }, [item]);

   return (
      <>
         <div className="portfolio__filter">
            {projectNav.map((item, index) => {
               return (
                  <span
                     onClick={e => {
                        handleClick(e, index);
                     }}
                     key={index}
                     className={`${
                        active === index ? 'active-work' : ''
                     } portfolio__item`}
                  >
                     {item.name}
                  </span>
               );
            })}
         </div>

         <div className="portfolio__container container grid">
            {projects.map(item => (
               <WorksItems item={item} key={item.id} />
            ))}
         </div>
      </>
   );
};

export default Works;
