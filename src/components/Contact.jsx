const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:saira.shafiq@example.com',
    icon: '✉️',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saira-shafiq-8699ab41a/',
    icon: '💼',
  },
  {
    label: 'GitHub',
    href: '#',
    icon: '🐙',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <p className="section-subtitle">I'd love to hear from you!</p>
        <div className="contact-card card">
          <p className="contact-message">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Feel free to reach out!
          </p>
          <div className="contact-links">
            {contactLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-icon">{l.icon}</span>
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
