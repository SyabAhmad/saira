const projects = [
  {
    title: 'Starlight Marquee',
    desc: 'A web-based event and marquee booking system with customer bookings, event management, payment handling, and database management. Built as the Final Year Project.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
    icon: '🎉',
  },
  {
    title: 'Saira Shafeeq Portfolio',
    desc: 'My personal portfolio website built with React and Vite. Showcasing my skills, projects, and experience as a full-stack developer.',
    tags: ['React', 'Vite', 'CSS3', 'JavaScript'],
    icon: '💼',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Things I've built</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-icon">{p.icon}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
