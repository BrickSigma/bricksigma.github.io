import './Projects.css';

import VGSockets from '../../assets/vgsockets.png';
import TicTacToe from '../../assets/tic-tac-toe.jpg';
import Asteroids from '../../assets/asteroids.png';
import Snake from '../../assets/snake.png';
import Calculator from '../../assets/calculator.png';
import CGOL from '../../assets/cgol.png';

const Card = ({ title, body, img, tools = [], alt = "", github, repo }) => {
    const toolsList = [];

    tools.forEach((value) => toolsList.push(
        <div key={value} className='toolItem'>{value}</div>
    ));

    return (
        <div className='card'>
            <div className='body'>
                <h1>{title}</h1>
                <p>{body}</p>
                <a href={github} target="_blank" rel="noopener noreferrer">{repo}</a>
                <div className='tools'>
                    {toolsList}
                </div>
            </div>
            <div className='img-container'>
                <img src={img} alt={alt}></img>
            </div>
        </div>
    )
};

// Create your Projects component here
const Projects = () => {
    let list = [
        <Card
            key={0}
            title="VGSockets"
            body="Video Game Sockets: A cross platform sockets library designed to make networking in video games and other applications easier"
            img={VGSockets}
            tools={["C", "Unix", "Win32"]}
            github={"https:/github.com/BrickSigma/VGSockets"}
            repo={"github.com/BrickSigma/VGSockets"} />,

        <Card
            key={1}
            title="Tic-Tac-Toe Minimax Algorithm"
            body="A clone of the well known game mixed with an impossible 'AI' using the minimax algorithm"
            img={TicTacToe}
            tools={["C", "Raylib"]}
            github={"https:/github.com/BrickSigma/Tic-Tac-Toe-Minimax"}
            repo={"github.com/BrickSigma/Tic-Tac-Toe-Minimax"} />,

        <Card
            key={2}
            title="Asteroids clone"
            body="Remake of the classic Atari game Asteroid in Python and Pygame"
            img={Asteroids}
            tools={["Python", "Pygame"]}
            github={"https:/github.com/BrickSigma/Asteroids-pygame"}
            repo={"github.com/BrickSigma/Asteroids-pygame"} />,

        <Card
            key={3}
            title="C-Snake"
            body="Just you're regular snake game, remade in C and using linked lists for my data structures class"
            img={Snake}
            tools={["C", "Raylib"]}
            github={"https:/github.com/BrickSigma/C-Snake"}
            repo={"github.com/BrickSigma/C-Snake"} />,

        <Card
            key={4}
            title="MacOS-Style Calculator"
            body="A university project to recreate the MacOS/iOS calculator app in Java and Swing"
            img={Calculator}
            tools={["Java", "Swing", "AWT"]}
            github={"https:/github.com/BrickSigma/Java-Calculator"}
            repo={"github.com/BrickSigma/Java-Calculator"} />,

        <Card
            key={5}
            title="Conway's Game Of Life"
            body="A zero player game based on setting up the initial state of the world, Conway's game of life is a marvel of automata to look at!"
            img={CGOL}
            tools={["C", "Python", "Raylib", "Pygame"]}
            github={"https:/github.com/BrickSigma/Game-ofLife-Raylib"}
            repo={"github.com/BrickSigma/Game-ofLife-Raylib"} />,
    ];

    return (
        <div id="projects">
            <h1>My Projects</h1>
            <div className='content'>
                {list}
            </div>
        </div>
    )
}

export default Projects;