import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Projects from './components/layouts/Projects';
import Bio from './components/layouts/Bio';
import Contact from './components/layouts/Contact';
import Container from './components/routes/Container';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />}>
            <Route element={<Container />}>
              <Route exact path='/projects' element={<Projects />}/>
              <Route exact path='/aboutme' element={<Bio />}/>
              <Route exact path='contact' element={<Contact />}/>
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
