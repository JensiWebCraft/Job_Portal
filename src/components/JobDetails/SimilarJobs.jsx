import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    company: "Microsoft",
    title: "React Developer",
    location: "Hyderabad",
    salary: "₹10 - ₹15 LPA",
  },
  {
    id: 2,
    company: "Amazon",
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹8 - ₹12 LPA",
  },
  {
    id: 3,
    company: "Infosys",
    title: "MERN Stack Developer",
    location: "Pune",
    salary: "₹7 - ₹11 LPA",
  },
];

export default function SimilarJobs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold text-slate-800 mb-8">
        Similar Jobs
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {jobs.map((job) => (

          <div
            key={job.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
          >

            <div className="flex items-center gap-4 mb-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {job.company.charAt(0)}
              </div>

              <div>

                <h3 className="text-lg font-bold text-slate-800">
                  {job.title}
                </h3>

                <p className="text-gray-500">
                  {job.company}
                </p>

              </div>

            </div>

            <p className="mb-2 text-gray-600">
              📍 {job.location}
            </p>

            <p className="mb-6 font-semibold text-green-600">
              💰 {job.salary}
            </p>

            <Link
              to={`/jobs/${job.id}`}
              className="block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}