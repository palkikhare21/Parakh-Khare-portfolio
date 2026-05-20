import "./style/Process.css";

export default function Process() {
  const steps = [
    {
      title: "DISCOVER",
      desc: "Deep dive into your brand, audience, competitors, and goals. No design without strategy.",
    },
    {
      title: "DEFINE",
      desc: "Brand positioning, visual direction, moodboards, and a creative brief we both commit to.",
    },
    {
      title: "DESIGN",
      desc: "Iterative design rounds with focused feedback. Concepts refined into a cohesive system.",
    },
    {
      title: "DELIVER",
      desc: "Final files, brand guidelines, and handoff support. Your brand, ready to launch.",
    },
  ];

  return (
    <section className="process-section">
      <div className="section-label">How I Work</div>
      <h2 className="section-title fade-up">MY PROCESS</h2>

      <div className="process-steps fade-up">
        <div className="steps-row">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-circle">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}