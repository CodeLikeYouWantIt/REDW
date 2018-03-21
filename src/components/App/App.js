import React, { Component } from 'react';
import Home from '../Page/Home/Home'
import Hamburger from '../HamburgerMenu/Hamburger'
import './App.css'
;

class App extends Component {
    render() {
        return (
            <div>
                <Hamburger/>
                <Home/>
            </div>
        );
    }
}

export default App;
