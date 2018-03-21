import React, { Component } from 'react';
import Home from '../Page/Home/Home'
import Hamburger from '../HamburgerMenu/Hamburger'
import AboutHome from '../Page/About/AboutHome'
import './App.css'
;

class App extends Component {
    render() {
        return (
            <div>
                <Hamburger/>
                <Home/>
                <AboutHome/>
            </div>
        );
    }
}

export default App;
