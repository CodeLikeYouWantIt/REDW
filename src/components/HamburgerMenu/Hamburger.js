import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import MediaQuery from 'react-responsive';
import './Hamburger.css'
// import { Link } from 'react-router-link'

class Hamburger extends Component {
    render() {
        return (
            <MediaQuery query="(max-width: 600px)">
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
            </MediaQuery>
        );
    }
}
export default Hamburger