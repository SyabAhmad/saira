export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle">What I've been building</p>
        <div className="exp-timeline">
          <div className="exp-dot" />
          <div className="exp-card card">
            <div className="exp-header">
              <h3 className="exp-role">Full-Stack Web Developer</h3>
              <span className="exp-type">Self-employed</span>
            </div>
            <p className="exp-date">Jan 2026 – Present &middot; 7 mos</p>
            <p className="exp-desc">
              Developed <strong>Starlight Marquee</strong>, a web-based event and marquee booking system as my
              Final Year Project. Contributed to the design and development of features for customer bookings,
              event management, payment handling, and database management.
            </p>
            <div className="exp-tags">
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">JavaScript</span>
              <span className="tag">PHP</span>
              <span className="tag">MySQL</span>
              <span className="tag">Git/GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
