export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          Built with <span className="footer-heart">&#9829;</span> by Saira Shafiq
        </p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
