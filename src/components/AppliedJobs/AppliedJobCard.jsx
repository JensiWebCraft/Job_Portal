import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function AppliedJobCard({ job }) {

  const statusColor = {
    Applied: "bg-blue-100 text-blue-700",
    "Under Review": "bg-yellow-100 text-yellow-700",
    Interview: "bg-purple-100 text-purple-700",
    Selected: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">

      <div className="flex flex-col lg:flex-row justify-between gap-6">

        <div>

          <h2 className="text-2xl font-semibold">
            {job.title}
          </h2>

          <p className="text-blue-600 font-medium mt-2">
            {job.company}
          </p>

          <div className="flex flex-wrap gap-5 mt-4 text-gray-600">

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {job.location}
            </span>

            <span className="flex items-center gap-2">
              <FaMoneyBillWave />
              {job.salary}
            </span>

            <span className="flex items-center gap-2">
              <FaBriefcase />
              {job.type}
            </span>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            Applied on {job.appliedDate}
          </p>

        </div>

        <div className="flex flex-col items-start lg:items-end gap-4">

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${statusColor[job.status]}`}
          >
            {job.status}
          </span>

          <Link
            to={`/job/${job.id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}