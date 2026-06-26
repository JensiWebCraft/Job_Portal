import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">🚀 #1 Job Portal</span>

        <h1>
          Find Your <span>Dream Job</span> Today
        </h1>

        <p>
          Search thousands of jobs from top companies and
          build your successful career with JobPortal.
        </p>

        <div className="hero-buttons">
          <button className="find-btn">Find Jobs</button>
          <button className="post-btn">Post a Job</button>
        </div>

      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
          alt="Hero"
        />
      </div>

    </section>
  );
}

export default Hero;