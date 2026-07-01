import { FaSearch } from "react-icons/fa";

export default function SavedJobsSearch() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

      <div className="flex items-center border rounded-xl px-4">

        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search saved jobs..."
          className="w-full p-4 outline-none"
        />

      </div>

    </div>
  );
}