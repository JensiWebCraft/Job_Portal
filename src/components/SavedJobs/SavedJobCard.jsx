import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaTrash,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function SavedJobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">

      <div className="flex justify-between">

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
            Saved {job.savedDate}
          </p>

        </div>

        <div className="flex flex-col gap-3">

          <Link
            to={`/job/${job.id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700"
          >
            View Details
          </Link>

          <button className="border border-red-500 text-red-500 px-5 py-2 rounded-lg hover:bg-red-50 flex items-center justify-center gap-2">
            <FaTrash />
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}