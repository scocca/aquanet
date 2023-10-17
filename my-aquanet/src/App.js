import React from 'react';
import './App.css';

import {NavBar} from './components/NavBar.js'
import {Home} from './components/home.js'

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
    </React.Fragment>
  );
}

export default App;
