import React from 'react';
import './App.css';
import  generation  from './assets/generation-logo.svg'
import fEmplea from './assets/femplea-logo.svg'
import bChile from './assets/bchile-logo.svg'
import  bhp  from './assets/bhp-logo.svg'

import {NavBar} from './components/NavBar.js'
import {Home} from './components/home.js'
import { Collaborators } from './components/collaborators';
import { Footer } from './components/footer';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
      <Collaborators generation={generation} femplea = {fEmplea} bchile = {bChile} bhp={bhp}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
