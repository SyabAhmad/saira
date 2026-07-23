export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A glimpse into who I am</p>

        <div className="about-layout">
          <div className="about-text-box">
            <p className="about-text">
              I am a Computer Science student with a strong passion for software development and web technologies.
              I am continuously improving my programming and problem-solving skills by learning HTML, CSS, JavaScript,
              PHP, MySQL, Git, and GitHub while building practical projects.
            </p>
            <p className="about-text">
              I enjoy learning new technologies and expanding my knowledge to create efficient and user-friendly
              applications. In the future, I plan to master modern frameworks and advanced development tools to
              become a skilled Full-Stack Developer.
            </p>
            <p className="about-text">
              I am eager to gain practical experience through internships, collaborate with professionals, and
              contribute to real-world projects while continuously growing as a software developer.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight">
              <span className="about-highlight-emoji">&#127891;</span>
              <div>
                <h4>Education</h4>
                <p>BSc Computer Science — University of Swat</p>
                <span className="about-highlight-date">2022 – 2026</span>
              </div>
            </div>
            <div className="about-highlight">
              <span className="about-highlight-emoji">&#128187;</span>
              <div>
                <h4>Experience</h4>
                <p>Full-Stack Web Developer — Self-employed</p>
                <span className="about-highlight-date">Jan 2026 – Present</span>
              </div>
            </div>
            <div className="about-highlight">
              <span className="about-highlight-emoji">&#128640;</span>
              <div>
                <h4>Focus</h4>
                <p>Web Development, Database Design, Clean Code</p>
                <span className="about-highlight-date">Always learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
