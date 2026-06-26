import "./FeaturedJobs.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹8 - ₹12 LPA",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹10 - ₹15 LPA",
    type: "Remote",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Ahmedabad",
    salary: "₹6 - ₹10 LPA",
    type: "Full Time",
  },
  {
    id: 4,
    title: "MERN Stack Developer",
    company: "Infosys",
    location: "Pune",
    salary: "₹7 - ₹11 LPA",
    type: "Hybrid",
  },
  {
    id: 5,
    title: "React Developer",
    company: "TCS",
    location: "Mumbai",
    salary: "₹5 - ₹9 LPA",
    type: "Full Time",
  },
  {
    id: 6,
    title: "Node.js Developer",
    company: "Accenture",
    location: "Chennai",
    salary: "₹8 - ₹13 LPA",
    type: "Remote",
  },
];

function FeaturedJobs() {
  return (
    <section className="featured-jobs">
      <div className="featured-title">
        <h2>Featured Jobs</h2>
        <p>Explore the latest opportunities from top companies.</p>
      </div>

      <div className="jobs-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <span className="job-type">{job.type}</span>

            <h3>{job.title}</h3>

            <p className="company">{job.company}</p>

            <p>📍 {job.location}</p>

            <p className="salary">{job.salary}</p>

            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;