import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';

export const projectData = [
   {
      id: 1,
      image: Work1,
      title: 'Movie-api',
      category: 'front',
      description:
         'A webpage with a responsive layout based on vanilla JS and themoviedb-api. Includes color switcher and personal library.\nTechnologies: JS, HTML/SASS,  REST APIs, Handlebars',

      link: 'https://digtiarenko.github.io/JS-movie_api/',
   },
   {
      id: 2,
      image: Work2,
      title: 'Kapusta: smart finance',
      category: 'fullstack',
      description:
         'A multipage app for managing your savings. \nTechnologies: React, Redux, Node.js, MongoDB, Google authentication, Swagger, Formik ect.',
      link: 'https://kapustaapp.netlify.app/',
   },
   {
      id: 3,
      image: Work3,
      title: 'ChatApp',
      category: 'back',
      description:
         'A responsive React messaging app based on socket.io with authentication, individual/group chat functionality, chat editing, notification ect. \nTechnologies: React, Node.js, Socket.io, MongoDB, Firebase.',
      link: 'https://fast-journey-62386.herokuapp.com/',
   },
   {
      id: 4,
      image: Work4,
      title: 'Contact book',
      description:
         'MPA with basic contact book functionality. \nReact + Material.ui. Redux + Redux Toolkit + RTK Query serves as state manager. WebServer [Node.js + Express] in connection with MongoDB.',
      category: 'fullstack',
      link: 'https://marvelous-bunny-daf51a.netlify.app/',
   },
];

export const projectNav = [
   { name: 'all' },
   { name: 'front' },
   { name: 'back' },
   { name: 'fullstack' },
];
