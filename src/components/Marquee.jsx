import "./style/Marquee.css";

export default function Marquee() {
  const items = [
    "Brand Identity",
    "Typography",
    "Visual Identity",
    "Packaging Design",
    "Social Media",
    "Illustration",
    "Art Direction",
    "Print & Editorial",
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span className="marquee-item" key={index}>
            {item} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}