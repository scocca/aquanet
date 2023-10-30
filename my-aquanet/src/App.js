import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
// import  generation  from './assets/generation-logo.svg'
// import fEmplea from './assets/femplea-logo.svg'
// import bChile from './assets/bchile-logo.svg'
// import  bhp  from './assets/bhp-logo.svg'

// import {NavBar} from './components/NavBar.js'
// import {Home} from './components/home.js'
// import { Collaborators } from './components/collaborators';
// import { Footer } from './components/footer';
import {Profile} from './routes/Profile.js'
import { Login } from './routes/Login.js';

// const Login =() =>{
//   return(
//     <div className="Home">
//     <NavBar/>
//     <Home/>
//     <Collaborators generation={generation} femplea = {fEmplea} bchile = {bChile} bhp={bhp}/>
//     <Footer/>
//   </div>
//   )
// }

// const MainProfile =()=>{
//   return(
//     <div className='MainProfile'>
//       <Profile/>
//     </div>
//   )
// }



function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/main-profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
