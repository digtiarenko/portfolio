// import React from 'react';
import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';

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
      </>
   );
}

export default App;
