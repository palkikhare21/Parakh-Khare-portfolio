
import "../styles/Logofolio.css";
import logo1 from "../assets/logos/logo1.jpeg";
import logo2 from "../assets/logos/logo2.jpeg";
import logo3 from "../assets/logos/logo3.jpeg";

const logos = [
  { id: 1, label: "Logo 1", image: logo1 },
  { id: 2, label: "Logo 2", image: logo2 },
  { id: 3, label: "Logo 3", image: logo3 },
];


const Logofolio = () => {
  return (
    <section className="logofolio" id="logofolio">

      <div className="section-top">

        <span className="section-number">02</span>

        <div>
          <h2>Logofolio</h2>

          <p>Word Mark • Letter Mark • Monogram • Typography</p>
        </div>

      </div>

      <div className="logo-grid">
        {logos.map((logo) => (
          <div className="logo-card" key={logo.id}>
            <img src={logo.image} alt={logo.label} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logofolio;