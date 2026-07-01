import SavedJobCard from "./SavedJobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹8 - ₹12 LPA",
    type: "Full Time",
    savedDate: "2 Days Ago",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹10 - ₹15 LPA",
    type: "Remote",
    savedDate: "Yesterday",
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "Adobe",
    location: "Ahmedabad",
    salary: "₹7 - ₹10 LPA",
    type: "Hybrid",
    savedDate: "Today",
  },
];

export default function SavedJobsList() {
  return (
    <div className="space-y-6">

      {jobs.map((job) => (
        <SavedJobCard
          key={job.id}
          job={job}
        />
      ))}

    </div>
  );
}