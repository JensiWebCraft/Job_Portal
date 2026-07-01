import { FaClipboardCheck } from "react-icons/fa";

export default function AppliedJobsHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">

      <div className="flex items-center gap-4">

        <FaClipboardCheck className="text-green-600 text-4xl" />

        <div>

          <h1 className="text-3xl font-bold">
            Applied Jobs
          </h1>

          <p className="text-gray-500 mt-2">
            Track all your job applications in one place.
          </p>

        </div>

      </div>

    </div>
  );
}