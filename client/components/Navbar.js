// import NavStyles from "./styles/NavStyles";
import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
        <div>
        <div className="navbar">
            <div className="logo">
                <h3>OneApp</h3>            
            </div>
            <div className="links">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Sign In</h3>
            </div>
        </div>
        <style jsx>{`
            .navbar {
                background: red;
                display: flex;
                justify-content: space-between;
            }
            .links {
                display: flex;
                justify-content: space-between;
            }
            h3 {
                padding: 3px;
            }
        `}
        </style>
            </div>
    )}
}


export default Navbar;