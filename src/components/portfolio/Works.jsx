import React from 'react';
import { projectData, projectNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
   return (
      <>
         <div className="work__filter">
            {projectNav.map((item, index) => {
               return (
                  <span key={index} className="work__item">
                     {item.name}
                  </span>
               );
            })}
         </div>

         <div className="work__container container grid">
            {projectData.map(item => (
               <WorksItems item={item} key={item.id} />
            ))}
         </div>
      </>
   );
};

export default Works;
