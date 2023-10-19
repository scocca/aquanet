import React from "react"
import './App.css'
import {NavBar} from './components/NavBar.js'
import { Footer } from './components/footer';

const MainProfile =()=>{
    return (
        <React.Fragment>
            <NavBar/>
            
            <Footer/>
        </React.Fragment>
    )
}

export {MainProfile}