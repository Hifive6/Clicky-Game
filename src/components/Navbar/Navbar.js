//sets up the Navbar Component
import React, { Component } from "react"
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-default navbar-fixed-top">
            <ul>
                <li className = "title">How good is your Memory</li>
                {/* <li className = "center"></li> */}
                <li className = "score">Your Score: {this.props.score}</li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;