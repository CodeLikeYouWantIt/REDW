import React, {Component} from 'react'
// import { Link } from 'react-router-link'

class NavBar extends Component {
    render (){
        return(
            <div class="navbar">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        );
    }
}
export default NavBar