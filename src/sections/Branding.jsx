import "../styles/Branding.css";


const branding = [
  {
    id: 1,
    title: "Corporate Branding",
    image: "https://placehold.co/600x800?text=Brand+1",
  },
  {
    id: 2,
    title: "Restaurant Branding",
    image: "https://placehold.co/600x800?text=Brand+2",
  },
  {
    id: 3,
    title: "Fashion Branding",
    image: "https://placehold.co/600x800?text=Brand+3",
  },
];

export default function Branding() {
  return (
    <section className="branding" id="branding">

      <div className="section-title">
        <span>04</span>

        <div>
          <h2>Branding</h2>
          <p>
            Business Cards • Letterheads • Stationery • Mockups
          </p>
        </div>
      </div>

      <div className="branding-grid">

        {branding.map((item) => (

          <div className="branding-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="branding-overlay">
              <h3>{item.title}</h3>
              <button>View Project</button>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}