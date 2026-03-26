import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-kicker">Frontend Developer</p>
        <h1>Forging Interfaces from Fire and Code</h1>
        <p>
          I build bold digital experiences with cinematic visuals, smooth performance,
          and production-ready React architecture.
        </p>

        <div className="hero-actions">
          <a href="#contact">Summon Me</a>
          <a href="#about">Who I Am</a>
        </div>
      </div>

      <div className="hero-network" aria-hidden="true">
        <div className="network-grid"></div>

        <div className="network-orbit orbit-a">
          <span className="network-node node-1"></span>
          <span className="network-node node-2"></span>
          <span className="network-node node-3"></span>
          <span className="network-node node-4"></span>
        </div>

        <div className="network-orbit orbit-b">
          <span className="network-node node-5"></span>
          <span className="network-node node-6"></span>
          <span className="network-node node-7"></span>
          <span className="network-node node-8"></span>
        </div>

        <div className="network-core">
          <span className="core-inner"></span>
        </div>

        <span className="endpoint endpoint-api">API</span>
        <span className="endpoint endpoint-db">DB</span>
        <span className="endpoint endpoint-client">CLIENT</span>
        <span className="endpoint endpoint-cache">CACHE</span>
        <span className="endpoint endpoint-auth">AUTH</span>
        <span className="endpoint endpoint-cdn">CDN</span>

        <span className="signal-ping ping-1"></span>
        <span className="signal-ping ping-2"></span>
      </div>

      <div className="hero-flame"></div>
    </section>
  );
}