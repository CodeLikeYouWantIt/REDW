import React, { Component } from 'react';
import Home from '../Page/Home/Home'
import NavBar from '../NavBar/NavBar'
import './App.css'
;

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Home/>
            </div>
        );
    }
}

export default App;
