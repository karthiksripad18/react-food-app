import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(
    () => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen ) setIsOpen(false);
      };
      window.addEventListener('resize', hideMenu);
      return () => {
        window.removeEventListener('resize', hideMenu);
      }
    }
  );

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
