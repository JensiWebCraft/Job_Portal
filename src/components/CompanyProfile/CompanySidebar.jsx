import { FaCamera } from "react-icons/fa";

export default function CompanySidebar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <div className="flex flex-col items-center">

        <img
          src="https://via.placeholder.com/150"
          alt="Company Logo"
          className="w-36 h-36 rounded-full border-4 border-blue-100 object-cover"
        />

        <h2 className="mt-5 text-2xl font-bold">
          Google
        </h2>

        <p className="text-gray-500">
          Information Technology
        </p>

        <label className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-700">

          <FaCamera />

          Upload Logo

          <input
            type="file"
            className="hidden"
          />

        </label>

      </div>

    </div>
  );
}