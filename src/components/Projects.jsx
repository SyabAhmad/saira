const projects = [
  {
    title: 'Starlight Marquee',
    desc: 'A web-based event and marquee booking system with customer bookings, event management, payment handling, and database management. Built as the Final Year Project.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Things I've built</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card card">
              <div className="project-icon">✨</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="project-card card project-placeholder">
            <div className="project-icon">🚀</div>
            <h3 className="project-title">More Coming Soon!</h3>
            <p className="project-desc">
              I'm constantly learning and building new things. Check back for more projects soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
