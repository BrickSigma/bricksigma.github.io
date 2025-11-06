import { useState } from "react";
import './Header.css';

import GitHubWhite from '../assets/links/github-mark-white.png';
import GitHubDark from '../assets/links/github-mark.png';
import ItchIOWhite from '../assets/links/itchio-logo-textless-white.png';
import ItchIODark from '../assets/links/itchio-logo-textless-black.png';
import LinkedInWhite from '../assets/links/In-White-128.png';
import LinkedInBlue from '../assets/links/In-Blue-128.png';
import CVWhite from '../assets/links/cv-white.png';
import CVDark from '../assets/links/cv-dark.png';

import CV from '../assets/cv.pdf';

import { HashLink } from "react-router-hash-link";

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
                <HashLink to="/#app">{name}</HashLink>
            </div>
            <div className="header-container">
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#projects">Projects</HashLink>
                <HashLink to="/#skills">Skills</HashLink>
                <HashLink to="/gallery#gallery">Gallery</HashLink>
            </div>
            <div className="icons-container">
                <Icon href="https://github.com/BrickSigma" alt="GitHub" dark={GitHubDark} white={GitHubWhite} scrolled={scrollStyle} />
                <Icon href="https://bricksigma.itch.io/" alt="Itch.io" dark={ItchIODark} white={ItchIOWhite} scrolled={scrollStyle} />
                <Icon href="https://www.linkedin.com/in/junaid-chaudhry-458b4b208" alt="LinkedIn" dark={LinkedInBlue} white={LinkedInWhite} scrolled={scrollStyle} />
                <Icon href={CV} alt="CV" dark={CVWhite} white={CVDark} scrolled={scrollStyle} />
            </div>
        </div>
    )
};

export default Header;