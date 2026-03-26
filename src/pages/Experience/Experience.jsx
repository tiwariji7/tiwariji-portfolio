import "./Experience.css";
import { FaBriefcase, FaGithub } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Softpro India",
    duration: "June 2023 - Aug 2023",
    summary:
      "Engineered core modules for native Android applications using Java and Material Design 3. Optimized real-time Firebase database queries, reducing data latency by 30%. Implemented secure user authentication flows and collaborated in an Agile environment using Git for version control and code reviews.",
    iconUrl: "https://www.softproindia.in/img/spi.png"
  },
  {
    role: "Technical Trainee",
    company: "MNNIT Prayagraj",
    duration: "Dec 2022 - Feb 2023",
    summary:
      "Completed intensive full-stack training focused on scalable architecture. Developed RESTful APIs using Node.js to bridge mobile frontends with SQL databases. Modernized legacy student portals using React.js and Tailwind CSS, and built rapid AI-integrated prototypes in multiple hackathons.",
    iconUrl: "https://www.mnnit.ac.in/images/logonew1.png"
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2022 - Present",
    summary:
      "Actively maintain and contribute to Android utility libraries. Resolved 20+ critical open-source bugs focused on UI performance, and mentored junior developers through detailed code reviews and documentation.",
    icon: <FaGithub />
  },
  {
    role: "B.Tech Student (CSE)",
    company: "United Institute of Technology",
    duration: "2022 - 2026 | CGPA: 7.7",
    summary:
      "Currently pursuing Bachelor of Technology in Computer Science and Engineering.",
    iconUrl: "https://www.united.ac.in/uit/assets/images/logo-2.png"
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <p className="experience-tagline">Hands-on work, open-source impact, and academic foundation.</p>

      <div className="experience-showcase">
        <div className="experience-container">
        {experiences.map((item, index) => (
          <article className={`experience-card ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <span className="experience-node" aria-hidden="true"></span>

            <div className={`experience-icon ${item.iconUrl ? "logo-icon" : ""}`}>
              {item.iconUrl ? (
                <img src={item.iconUrl} alt={`${item.company} logo`} loading="lazy" />
              ) : (
                item.icon || <FaBriefcase />
              )}
            </div>

            <div className="experience-body">
              <div className="experience-meta">
                <h3>{item.role}</h3>
                <span>{item.company}</span>
              </div>

              <p className="experience-duration">{item.duration}</p>
              <p className="experience-summary">{item.summary}</p>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
