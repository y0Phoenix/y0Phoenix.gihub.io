import './App.css';
import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
      </Fragment>
    </Router>
  );
}

export default App;
