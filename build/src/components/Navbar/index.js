import React from "react";
import "./navbar.css";

// === Creating a function for the Navbar that will return the following ===
function Navbar(props){
    return (
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Star Wars Clicky Game</span>
            <p className="nav-item">
                Score: {props.score} | Top Score: {props.topScore}
            </p>
        </nav>
    );
}

export default Navbar;