import React, {Component} from 'react'
import { slide as Menu } from 'react-burger-menu'
import './NavBar.css'
// import { Link } from 'react-router-link'

class NavBar extends Component {
    showSettings(event) {
        event.preventDefault();

    }

    render (){
        return(
            <div class="navbar">
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="">Events</a>
            </div>
        );
    }
}
export default NavBar