import { useState } from "react";
import './Header.css';

import GitHubWhite from '../assets/github-mark-white.png';
import GitHubDark from '../assets/github-mark.png';
import ItchIOWhite from '../assets/itchio-logo-textless-white.png';
import ItchIODark from '../assets/itchio-logo-textless-black.png';
import LinkedInWhite from '../assets/In-White-128.png';
import LinkedInBlue from '../assets/In-Blue-128.png';

/** Icon container for header links. */
var Icon = ({ white, dark, scrolled, href = "", alt = "" }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={(scrolled === "") ? white : dark} alt={alt}></img>
        </a>
    )
}

// Create your Header component here
const Header = () => {
    const [scrollStyle, setScrollStyle] = useState("");
    const [name, setName] = useState("");

    document.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight/2) {
            setScrollStyle("scrolled");
            setName("Junaid Chaudhry")
        } else {
            setScrollStyle("");
            setName("");
        }
    });

    return (
        <div className={"header " + scrollStyle}>
            <div className="header-logo">
                <a href="#app">{name}</a>
            </div>
            <div className="header-container">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="">Gallery</a>
            </div>
            <div className="icons-container">
                <Icon href="https://github.com/BrickSigma" alt="GitHub" dark={GitHubDark} white={GitHubWhite} scrolled={scrollStyle} />
                <Icon href="https://bricksigma.itch.io/" alt="Itch.io" dark={ItchIODark} white={ItchIOWhite} scrolled={scrollStyle} />
                <Icon href="https://www.linkedin.com/in/mohamed-junaid-chaudhry-458b4b208/" alt="LinkedIn" dark={LinkedInBlue} white={LinkedInWhite} scrolled={scrollStyle} />
            </div>
        </div>
    )
};

export default Header;