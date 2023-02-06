import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.jpg';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.jpg';
import Work5 from '../../assets/work5.jpg';

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
         'A SPA for managing your savings. \nTechnologies: React, Redux, Node.js, MongoDB, Google authentication, Swagger, Formik ect.',
      link: 'https://kapustaapp.netlify.app/',
   },
   {
      id: 3,
      image: Work5,
      title: 'Space NEWS',
      category: 'front',
      description:
         'A fully responsive and easy-to-use and convenient platform for people to stay informed \nabout the latest developments in space exploration, science, and technology. \nTechnologies: TS, HTML/SASS,  REST APIs, MUI, Redux Toolkit',
      link: 'https://gilded-douhua-d195e0.netlify.app/',
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
   {
      id: 5,
      image: Work3,
      title: 'ChatApp',
      category: 'back',
      description:
         'A responsive React messaging app based on socket.io with authentication, individual/group chat functionality, chat editing, notification ect. \nTechnologies: React, Node.js, Socket.io, MongoDB, Firebase.',
      link: 'https://fast-journey-62386.herokuapp.com/',
   },
];

export const projectNav = [
   { name: 'all' },
   { name: 'front' },
   { name: 'back' },
   { name: 'fullstack' },
];
