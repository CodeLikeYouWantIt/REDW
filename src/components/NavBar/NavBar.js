import React, {Component} from 'react'
import MediaQuery from 'react-responsive';
import './NavBar.css'
// import { Link } from 'react-router-link'

class NavBar extends Component {
    render (){
        return(
            <MediaQuery query="(min-width: 601px)">
                <div class="navbar">
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Co</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </div>
            </MediaQuery>
        );
    }
}
export default NavBar