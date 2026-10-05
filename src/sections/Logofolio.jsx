
import "../styles/Logofolio.css";

const logos = [
  { id: 1, label: "Logo 1" },
  { id: 2, label: "Logo 2" },
  { id: 3, label: "Logo 3" },
  { id: 4, label: "Logo 4" },
  { id: 5, label: "Logo 5" },
  { id: 6, label: "Logo 6" },
];


const Logofolio = () => {
  return (
    <section  className="logofolio" id="logofolio">

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
            <span>{logo.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logofolio;