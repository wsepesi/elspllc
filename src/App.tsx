import './App.css';

import {
	Route,
	Routes
} from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import PracticeFocus from './pages/PracticeFocus';
import Presentations from './pages/Presentations';
import React from 'react'
import RepExp from './pages/RepExp';

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/practice_focus" element={<PracticeFocus />} />
      <Route path="/presentations" element={<Presentations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/representative_experience" element={<RepExp />} />
    </Routes>
  );
}

export default App;
