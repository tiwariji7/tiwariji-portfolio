import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="/img3.png" alt="Profile front" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="/img4.png" alt="Profile back" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi, I’m Shivam Tiwari, founder of Nexus Digital — a digital solutions company focused on helping startups and new businesses grow online. We create modern websites, applications, and strong brand identities that make businesses stand out.

Our goal is to turn ideas into real, impactful digital experiences that attract customers and build trust. From design to development, we provide complete support to bring businesses into the digital world.

At Nexus Digital, we believe in simple, smart, and effective solutions that help businesses grow faster.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;