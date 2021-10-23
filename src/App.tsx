import './App.css';

import {
	Route,
	Switch
} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import PracticeFocus from './pages/PracticeFocus';
import Publications from './pages/Publications';
import React from 'react'

const App = (): React.ReactElement => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/practice-focus">
        <PracticeFocus />
      </Route>
      <Route path="/publications">
        <Publications />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default App;
