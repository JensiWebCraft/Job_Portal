import { FaHeart } from "react-icons/fa";

export default function SavedJobsHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">

      <div className="flex items-center gap-4">

        <FaHeart className="text-red-500 text-4xl" />

        <div>

          <h1 className="text-3xl font-bold">
            Saved Jobs
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your saved jobs in one place.
          </p>

        </div>

      </div>

    </div>
  );
}