import "./Certificate.css";

const certificates = [
  {
    title: "Generative AI",
    issuer: "Google Cloud",
    year: "2024",
    iconUrl: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
  },
  {
    title: "Python Programming",
    issuer: "Microsoft Learn",
    year: "2023",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    title: "Full Stack Web Dev",
    issuer: "Coursera",
    year: "2023",
    iconUrl: "https://images.ctfassets.net/00atxywtfxvd/2QeS5ysKMhZ3ZjiU2rGRJA/e15df94b265053ce8ded4f5e630241c8/cropped-android-chrome-512x512-1.png"
  },
  {
    title: "Web Development Mastery",
    issuer: "MNNIT",
    year: "2022",
    iconUrl: "https://www.mnnit.ac.in/images/logonew1.png"
  }
];

function Certificate() {
  return (
    <section className="certificate" id="certificate">
      <div className="title">
        <h2>Certificate</h2>
      </div>

      <div className="certificate-container">
        {certificates.map((item, index) => (
          <article className="certificate-card" key={index}>
            <div className="certificate-top">
              <div className="certificate-icon logo-icon">
                <img src={item.iconUrl} alt={`${item.issuer} logo`} loading="lazy" />
              </div>
              <span>{item.year}</span>
            </div>

            <h3>{item.title}</h3>
            <p className="issuer">{item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
