import { useEffect, useRef } from 'react';
import './scrollUp.css';

const ScrollUp = () => {
   const scrollRef = useRef(null);

   useEffect(() => {
      const handleScroll = e => {
         if (window.scrollY > 793) {
            scrollRef.current.classList.add('show-scroll');
         } else {
            scrollRef.current.classList.remove('show-scroll');
         }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <a href="#home" className="scrollup" ref={scrollRef}>
         <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
   );
};

export default ScrollUp;
