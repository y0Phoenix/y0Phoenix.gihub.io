import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Projects from './components/layouts/Projects';
import Bio from './components/layouts/Bio';
import Contact from './components/layouts/Contact';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route exact path='/portfolio' element={<Projects />}/>
          <Route exact path='/aboutme' element={<Bio />}/>
          <Route exact path='contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
