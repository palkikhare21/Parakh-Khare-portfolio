import "./style/Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-header" style={{ padding: 0 }}>
        <div>
          <div className="section-label">Client Words</div>
          <h2 className="section-title fade-up">
            WHAT THEY
            <br />
            SAY
          </h2>
        </div>
      </div>

      <div className="testimonials-grid fade-up">
        <div className="testimonial">
          <span className="quote-mark">"</span>
          <p className="testimonial-text">
            Alex transformed our brand from a generic startup into something
            people immediately recognize and trust. The identity work was
            extraordinary.
          </p>

          <div className="testimonial-author">
            <div className="author-avatar">SR</div>
            <div>
              <div className="author-name">Sarah Rhodes</div>
              <div className="author-role">CEO, Ember Spirits</div>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <span className="quote-mark">"</span>
          <p className="testimonial-text">
            Working with Alex is unlike any other design collaboration. They
            think strategically, design beautifully, and deliver on time.
            Exceptional.
          </p>

          <div className="testimonial-author">
            <div className="author-avatar">MK</div>
            <div>
              <div className="author-name">Maya Kapoor</div>
              <div className="author-role">Founder, Nova Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}