export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-title">
            Saira Shafeeq
          </h1>
          <p className="hero-role">Full-Stack Developer</p>
          <p className="hero-location">
            Saidu Sharif, KPK, Pakistan
          </p>
          <div className="hero-tech">
            <span>PHP</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Git</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/Saira.png"
            alt="Saira Shafeeq"
          />
        </div>
      </div>
    </section>
  )
}
