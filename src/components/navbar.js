import React from "react"
import Logo from "../images/troll-face.png"

export default function Navbar(){
    return (
        <div>
            <nav>
                <img src={Logo} alt="nav-logo-image" className="nav--logo--image"/>
                <p className="nav--logo--text">Meme Generator</p>
                <p className="nav--course-text">React course - Project 3</p>
            </nav>
        </div>
    )
}