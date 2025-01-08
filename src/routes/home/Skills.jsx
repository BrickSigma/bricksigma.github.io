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
                <SkillCard img={Python} body={"Python ~ 4 years"} />
                <SkillCard img={C} body={"C Programming ~ 3 years"} />
                <SkillCard img={CPP} body={"C++ ~ 2 years"} />
                <SkillCard img={Flutter} body={"Flutter ~ 1 years"} />
                <SkillCard img={Java} body={"Java ~ 2 years"} />
                <SkillCard img={Raylib} body={"Raylib ~ 3 years"} />
                <SkillCard img={Git} body={"Git ~ 2 years"} />
                <SkillCard img={Linux} body={"Linux ~ 2 years"} />
            </div>
        </div>
    );
}

export default Skills;