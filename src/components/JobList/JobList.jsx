import JobCard from "../JobCard/JobCard";
import "./JobList.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹8 - 12 LPA",
    experience: "2+ Years",
    type: "Full Time",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹10 - 15 LPA",
    experience: "3+ Years",
    type: "Remote",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "Amazon",
    location: "Ahmedabad",
    salary: "₹6 - 10 LPA",
    experience: "Fresher",
    type: "Hybrid",
    skills: ["React", "Node.js", "MongoDB"],
  },
];

function JobList() {
  return (
    <div className="job-list">

      {
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      }

    </div>
  );
}

export default JobList;