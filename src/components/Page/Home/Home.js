import React, { Component } from 'react';
import './Home.css'
import ReactRevealText from 'react-reveal-text'
import NavBar from '../../NavBar/NavBar'


class Home extends Component {
    render() {
        return (
            <div className="header">
                <NavBar/>
                <div class="heading">
                    <h1>
                        <span>R</span>
                        <span>E</span>
                        <span>D</span>
                        <span>W</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Home