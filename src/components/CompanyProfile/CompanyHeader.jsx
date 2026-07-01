import { FaBuilding } from "react-icons/fa";

export default function CompanyHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center">

          <FaBuilding className="text-white text-3xl" />

        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Company Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your company information and branding.
          </p>

        </div>

      </div>

    </div>
  );
}