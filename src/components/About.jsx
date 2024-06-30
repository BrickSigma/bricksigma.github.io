import './About.css';

import Background from '../assets/about-background.png';

// Create your About component here
const About = () => {
    return (
        <div id="about">
            <img src={Background} alt='alt'></img>
            <div className="content">
                <h1>Hello World!</h1>
                <p>My name is Junaid, also known as Brick Sigma in the digital world, currently studying a Bachelors of Science in Informatics and
                    Computer Science at Strathmore University, Kenya.</p>
                <p>I am a passionate developer who enjoys creating video games, low level programming, and robotics,
                    as well as photography, writting poetry, and playing piano in my free time.</p>
            </div>
        </div>
    )
}

export default About;