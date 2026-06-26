import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Ready to Find Your Dream Job?</h2>

        <p>
          Join thousands of professionals and discover exciting career
          opportunities from top companies across India.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn">
            Create Account
          </button>

          <button className="secondary-btn">
            Browse Jobs
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;