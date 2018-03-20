import React, {Component} from 'react'
import './NavBar.css'
// import { Link } from 'react-router-link'

class NavBar extends Component {
    render (){
        return(
            <div class="navbar">
                <a href="#home">Home</a>
                <a href="#news">Events</a>
                <a href="#contact">The Team</a>
                <a href="#about">About</a>
            </div>
        );
    }
}
export default NavBar