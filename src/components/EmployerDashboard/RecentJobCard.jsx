import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

export default function RecentJobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-semibold">
            {job.title}
          </h2>

          <p className="text-blue-600 mt-2">
            {job.company}
          </p>

          <p className="text-gray-500 mt-2">
            📍 {job.location}
          </p>

          <div className="flex items-center gap-2 mt-4 text-gray-600">

            <FaUsers />

            {job.applicants} Applicants

          </div>

        </div>

        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
          {job.status}
        </span>

      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
      >
        View Details
      </Link>

    </div>
  );
}