import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <p>© 2026 Nexus Digital. All rights reserved.</p>
          <ul className="footer-links">
          </ul>
        </div>

        <div className="social-icons">

          <a href="https://github.com/tiwariji7" target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/tiwarijii/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          <a href="https://www.instagram.com/tiwarijii.7/?hl=en" target="_blank" rel="noreferrer"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;