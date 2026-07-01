import { FaGraduationCap } from "react-icons/fa";

export default function EducationCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <div className="flex items-center gap-3 mb-5">
        <FaGraduationCap className="text-blue-600 text-2xl" />
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>

      <div className="space-y-2">

        <h3 className="text-xl font-semibold">
          B.Tech Computer Engineering
        </h3>

        <p className="text-gray-600">
          Marwadi University
        </p>

        <p className="text-gray-500">
          Rajkot, Gujarat
        </p>

        <p className="text-gray-500">
          2022 - 2026
        </p>

        <p className="font-medium text-green-600">
          CGPA : 8.98
        </p>

      </div>

    </div>
  );
}