import "./Skills.css";

import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaGitAlt,
FaGithub,
FaFigma,
FaNodeJs,
FaJava
} from "react-icons/fa";

import {
SiUnity,
SiTailwindcss,
SiFirebase,
SiMongodb,
SiExpress,
SiMysql,
SiPhp
} from "react-icons/si";

function Skills(){

const icons = [
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaJava,
	SiMysql,
	SiPhp,
	FaNodeJs,
	SiExpress,
	SiMongodb,
	FaGitAlt,
	FaGithub,
	FaFigma,
	SiUnity,
	SiTailwindcss,
	SiFirebase
];

return(

<div className="skills">
<div className="skills-slider">
<div className="skills-track track-1">

{icons.map((Icon, index) => (
<Icon key={`track1-${index}`}/>
))}

</div>

<div className="skills-track track-2" aria-hidden="true">

{icons.map((Icon, index) => (
<Icon key={`track2-${index}`}/>
))}

</div>

</div>

</div>

)

}

export default Skills;