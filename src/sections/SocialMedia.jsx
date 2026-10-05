import "../styles/SocialMedia.css";

const posts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `/social/post${i + 1}.jpg`,
}));

export default function SocialMedia() {
  return (
    <section className="social" id="social">

      <div className="section-title">
        <span>05</span>

        <div>
          <h2>Social Media</h2>
          <p>Instagram • Facebook • Marketing Campaigns</p>
        </div>
      </div>

      <div className="social-grid">

        {posts.map((post) => (

          <div className="social-card" key={post.id}>

            <img src={post.image} alt="" />

          </div>

        ))}

      </div>

    </section>
  );
}