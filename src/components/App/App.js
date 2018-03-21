import React, { Component } from 'react';
import Home from '../Page/Home/Home'
import Hamburger from '../HamburgerMenu/Hamburger'
import AboutHome from '../Page/About/AboutHome'
import Footer from '../Footer/Footer'
import Highlight from '../Page/Highlight/Highlight'
;

class App extends Component {
    render() {
        return (
            <div>
                <Hamburger/>
                <Home/>
                <AboutHome/>
                <Highlight/>
                <Footer/>
            </div>
        );
    }
}

export default App;
