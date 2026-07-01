import AppliedJobCard from "./AppliedJobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹8 - ₹12 LPA",
    type: "Full Time",
    appliedDate: "25 June 2026",
    status: "Under Review",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹10 - ₹15 LPA",
    type: "Remote",
    appliedDate: "20 June 2026",
    status: "Interview",
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "Adobe",
    location: "Ahmedabad",
    salary: "₹7 - ₹10 LPA",
    type: "Hybrid",
    appliedDate: "18 June 2026",
    status: "Applied",
  },
];

export default function AppliedJobsList() {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <AppliedJobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
}