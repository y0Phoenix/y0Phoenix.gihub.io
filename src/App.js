import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Projects from './components/layouts/Projects';
import Bio from './components/layouts/Bio';
import Alert from './components/layouts/Alert';
import Contact from './components/layouts/Contact';
import { Provider } from 'react-redux';
import store from './store';
import Loading from './components/layouts/loading';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Loading />
          <Alert />
          <Routes>
            <Route exact path='/' element={<Landing />}/>
            <Route exact path='/portfolio' element={<Projects />}/>
            <Route exact path='/aboutme' element={<Bio />}/>
            <Route exact path='contact' element={<Contact />}/>
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
