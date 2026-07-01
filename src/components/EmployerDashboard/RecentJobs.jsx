import RecentJobCard from "./RecentJobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    applicants: 56,
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    applicants: 42,
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Ahmedabad",
    applicants: 31,
    status: "Closed",
  },
];

export default function RecentJobs() {
  return (
    <section>

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Jobs
        </h2>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {jobs.map((job) => (
          <RecentJobCard
            key={job.id}
            job={job}
          />
        ))}

      </div>

    </section>
  );
}