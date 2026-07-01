import { FaUserCircle } from "react-icons/fa";

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      <div className="flex items-center gap-5">

        <FaUserCircle className="text-blue-600 text-6xl" />

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your personal information, resume, skills and experience.
          </p>

        </div>

      </div>

    </div>
  );
}