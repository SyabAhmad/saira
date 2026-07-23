const skills = [
  { name: 'HTML5', icon: '🪄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'PHP', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Git & GitHub', icon: '🐙' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Technologies I work with</p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card card">
              <span className="skill-icon">{s.icon}</span>
              <h3 className="skill-name">{s.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
