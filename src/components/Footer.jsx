import "./style/Footer.css";


export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">AM</div>

      <div className="footer-links">
        <a href="#works">Work</a>
        <a href="#logos">Logos</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-copy">© 2026 Alex Mercer</div>
    </footer>
  );
}