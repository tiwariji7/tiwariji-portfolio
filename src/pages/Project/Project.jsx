import "./Project.css";

import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/img.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "SeHAT Smart Care",
    img: "https://github.com/tiwariji7/SeHAT-SmartCare/raw/main/sehat-smartcare.png",
    desc: "A smart AI-driven healthcare app that transforms complex medical reports into simple, actionable insights with real-time analysis, easy-to-understand results, and preventive health guidance.",
    skills: ["Android (Java)", "AI API Integration", "REST API"],
    github: "https://github.com/tiwariji7/SeHAT-SmartCare",
    live: null
  },

  {
    title: "Tiwari Brothers - Infrastructure & Engineering Solutions",
    img: "https://github.com/tiwariji7/tiwaribrothers-website/raw/main/tiwari-brothers.png",
    desc: "Official website of Tiwari Brothers, built with a premium UI, smooth animations, and scalable architecture to showcase services, projects, and business credibility.",
    skills: ["React + TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/tiwariji7/tiwaribrothers-website",
    live: "https://tiwaribrothersinfra.in"
  },

  {
    title: "TOMATO - 3D Food Delivery Web App",
    img: "https://github.com/tiwariji7/tomato/raw/main/Screenshot%202026-02-08%20121439.png",
    desc: "A modern Zomato-inspired 3D food delivery web app with premium UI, smooth animations, and complete end-to-end user flow built with production-focused frontend architecture.",
    skills: ["React + Vite", "TypeScript", "Three.js / R3F", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/tiwariji7/tomato",
    live: "https://tomato-ecru-three.vercel.app"
  },

  {
    title: "Blog Website",
    img: img4,
    desc: "Clean and simple blogging platform with markdown support.",
    skills: ["HTML", "Tailwind", "JavaScript"],
    github: "#",
    live: "#"
  },

  {
    title: "Game Landing Page",
    img: img5,
    desc: "Landing page for a game with animations and parallax effects.",
    skills: ["HTML", "CSS", "GSAP"],
    github: "#",
    live: "#"
  },

  {
    title: "Task Manager",
    img: img6,
    desc: "Task tracking web app with CRUD features and clean UI.",
    skills: ["HTML", "CSS", "JS"],
    github: "#",
    live: "#"
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href={project.github} className="btn" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>

              {project.live ? (
                <a href={project.live} className="btn" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              ) : (
                <span className="btn btn-disabled">
                  <i className="fas fa-external-link-alt"></i> Live: NA
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}