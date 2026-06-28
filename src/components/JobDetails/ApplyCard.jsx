import {
  FaMoneyBillWave,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaCalendarAlt,
  FaCheckCircle,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";

export default function ApplyCard() {
  return (
    <aside className="sticky top-28 rounded-2xl bg-white border border-gray-200 shadow-lg p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Job Summary
      </h2>

      {/* Information */}

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <FaMoneyBillWave className="text-blue-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Salary</p>
            <h4 className="font-semibold">₹8 - ₹12 LPA</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaBriefcase className="text-blue-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Job Type</p>
            <h4 className="font-semibold">Full Time</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Location</p>
            <h4 className="font-semibold">Bangalore</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaUserGraduate className="text-blue-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Experience</p>
            <h4 className="font-semibold">2+ Years</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-blue-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Apply Before</p>
            <h4 className="font-semibold">30 July 2026</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <h4 className="font-semibold text-green-600">Open</h4>
          </div>
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex flex-col gap-4">

        <button className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Apply Now
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
          <FaBookmark />
          Save Job
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
          <FaShareAlt />
          Share Job
        </button>

      </div>

    </aside>
  );
}