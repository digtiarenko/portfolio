// import React from 'react';
import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

function App() {
   return (
      <>
         <Header />
         <main className="main">
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contacts />
         </main>
         <Footer />

         <ScrollUp />
      </>
   );
}

export default App;
