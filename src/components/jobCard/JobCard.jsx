import "./JobCard.css";

function JobCard() {
  return (
    <div className="job-card">

      <div className="job-header">

        <div className="company">

          <div className="company-logo">
            G
          </div>

          <div>
            <h2>Frontend Developer</h2>
            <p>Google</p>
          </div>

        </div>

        <span className="job-type">
          Full Time
        </span>

      </div>

      <div className="job-info">

        <span>📍 Bangalore</span>

        <span>💰 ₹8 - 12 LPA</span>

        <span>💼 2+ Years</span>

        <span>🕒 2 Days Ago</span>

      </div>

      <div className="skills">

        <span>React</span>

        <span>JavaScript</span>

        <span>HTML</span>

        <span>CSS</span>

      </div>

      <div className="job-buttons">

        <button className="details-btn">
          View Details
        </button>

        <button className="apply-btn">
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobCard;