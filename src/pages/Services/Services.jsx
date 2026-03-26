import "./Services.css"
import { useState } from "react";
import { FaCode, FaMobileAlt, FaRobot, FaPalette, FaCogs, FaVideo, FaGlobe, FaRocket } from "react-icons/fa";

const serviceCategories = {
  development: {
    label: "Development",
    icon: <FaCode />,
    services: [
      {
        title: "Website Development",
        icon: <FaCode className="service-icon" />,
        items: [
          "Business Websites (Modern UI/UX)",
          "Portfolio Websites",
          "E-commerce Websites",
          "Landing Pages (High Conversion)",
          "Custom Web Design"
        ]
      },
      {
        title: "App Development",
        icon: <FaMobileAlt className="service-icon" />,
        items: [
          "Android App Development (Java)",
          "Custom Utility Apps",
          "AI-based Mobile Apps",
          "Business Apps (Booking, Management, etc.)"
        ]
      },
      {
        title: "Startup & Custom Projects",
        icon: <FaRocket className="service-icon" />,
        items: [
          "MVP Development",
          "Idea to Product Execution",
          "Custom Tech Solutions"
        ]
      }
    ]
  },
  design: {
    label: "Design & Creative",
    icon: <FaPalette />,
    services: [
      {
        title: "UI/UX Design",
        icon: <FaPalette className="service-icon" />,
        items: [
          "Modern & Futuristic UI Design",
          "Mobile App UI Design",
          "Website UI Prototypes",
          "Dashboard Design"
        ]
      },
      {
        title: "Creative & Editing",
        icon: <FaVideo className="service-icon" />,
        items: [
          "Video Editing (Reels / Ads)",
          "Social Media Content Design",
          "Logo & Brand Identity Design"
        ]
      }
    ]
  },
  smart: {
    label: "AI & Automation",
    icon: <FaRobot />,
    services: [
      {
        title: "AI Solutions",
        icon: <FaRobot className="service-icon" />,
        items: [
          "AI Chatbot Development",
          "Voice Assistants",
          "Automation Tools"
        ]
      },
      {
        title: "Automation & Smart Systems",
        icon: <FaCogs className="service-icon" />,
        items: [
          "Workflow Automation (n8n / APIs)",
          "Business Process Automation",
          "Smart Alert Systems (Security / Safety Apps)"
        ]
      }
    ]
  },
  support: {
    label: "Digital Setup & Support",
    icon: <FaGlobe />,
    services: [
      {
        title: "Digital Setup & Support",
        icon: <FaGlobe className="service-icon" />,
        items: [
          "Domain & Hosting Setup",
          "Website Optimization",
          "Basic SEO Setup",
          "Maintenance & Support"
        ]
      }
    ]
  }
};

function Services(){
  const [activeTab, setActiveTab] = useState("development");

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Nexus Digital - Services</h2>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <button
              key={key}
              className={`tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="services-container">
        {serviceCategories[activeTab].services.map((service) => (
          <div className="service-card" key={service.title}>
            {service.icon}
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  )

}

export default Services;