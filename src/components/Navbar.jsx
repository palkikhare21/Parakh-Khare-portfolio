import "./style/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#">
        AM
      </a>

      <ul className="nav-links">
        <li><a href="#works">Work</a></li>
        <li><a href="#logos">Logos</a></li>
        <li><a href="#project-work">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className="nav-cta" href="#contact">
        Let's Talk
      </a>
    </nav>
  );
}