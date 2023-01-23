import React from "react";
import './Navbar.css'

function Navbar(){
    return(
        <div className="Nav">
            <ul className="nav-elements">
                <li className="element">Product</li>
                <li  className="element">Our story</li>
                <li  className="element">Resources</li>
            </ul>
        </div>
    )
}

export default Navbar