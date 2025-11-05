import './Skills.css';

import Python from '../../assets/skills/python.png';
import C from '../../assets/skills/c.png';
import CPP from '../../assets/skills/cpp.png';
import Flutter from '../../assets/skills/flutter.png';
import Java from '../../assets/skills/java.png';
import Raylib from '../../assets/skills/raylib.png';
import Git from '../../assets/skills/git.png';
import Linux from '../../assets/skills/linux.png';

const SkillCard = ({img, body}) => {
    return (
        <div className='skill'>
            <img src={img} alt=''></img>
            <p>{body}</p>
        </div>
    )
}

// Create your Skills component here
const Skills = () => {
    return (
        <div id="skills">
            <h1>My Skills</h1>
            <div className='content'>
                <SkillCard img={Python} body={"Python"} />
                <SkillCard img={C} body={"C Programming"} />
                <SkillCard img={CPP} body={"C++"} />
                <SkillCard img={Flutter} body={"Flutter"} />
                <SkillCard img={Java} body={"Java"} />
                <SkillCard img={Raylib} body={"Raylib"} />
                <SkillCard img={Git} body={"Git"} />
                <SkillCard img={Linux} body={"Linux"} />
            </div>
        </div>
    );
}

export default Skills;