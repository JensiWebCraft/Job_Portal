import "./JobCard.css";
import { Link } from "react-router-dom";


function JobCard({ job }) {
  return (
    <div className="job-card">

      <div className="job-header">

        <div className="company">

          <div className="company-logo">
            {job.company.charAt(0)}
          </div>

          <div>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>

        </div>

        <span className="job-type">
          {job.type}
        </span>

      </div>

      <div className="job-info">

        <span>📍 {job.location}</span>

        <span>💰 {job.salary}</span>

        <span>💼 {job.experience}</span>

      </div>

      <div className="skills">

        {
          job.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))
        }

      </div>

      <div className="job-buttons">

        <Link
  to={`/jobs/${job.id}`}
  className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
>
  View Details
</Link>

        <button className="apply-btn">
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobCard;
