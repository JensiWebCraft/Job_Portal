import { FaSearch } from "react-icons/fa";

export default function AppliedJobsSearch() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

      <div className="flex flex-col lg:flex-row gap-4">

        <div className="flex items-center flex-1 border rounded-xl px-4">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search applied jobs..."
            className="w-full p-4 outline-none"
          />

        </div>

        <select className="border rounded-xl px-5 py-4">
          <option>All</option>
          <option>Applied</option>
          <option>Under Review</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>

      </div>

    </div>
  );
}