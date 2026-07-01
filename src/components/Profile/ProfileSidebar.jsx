import { useState } from "react";
import {
  FaCamera,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

export default function ProfileSidebar() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      {/* Profile Image */}
      <div className="flex flex-col items-center">

        <div className="relative">

          <img
            src={
              image ||
              "https://ui-avatars.com/api/?name=Jensi+Kachhadiya&background=2563eb&color=fff&size=200"
            }
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-100"
          />

          {/* Upload Button */}
          <label className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">

            <FaCamera />

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

          </label>

        </div>

        {/* Name */}
        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Jensi Kachhadiya
        </h2>

        {/* Role */}
        <div className="flex items-center gap-2 mt-2 text-gray-600">

          <FaUserTie className="text-blue-600" />

          MERN Stack Developer

        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2 text-gray-500">

          <FaMapMarkerAlt />

          Rajkot, Gujarat

        </div>

      </div>

      {/* Divider */}
      <hr className="my-6" />

      {/* Upload Button */}
      <label className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl cursor-pointer transition">

        <FaCamera />

        Upload Photo

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

      </label>

      {/* Profile Completion */}
      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="font-medium">
            Profile Completion
          </span>

          <span className="text-blue-600 font-bold">
            75%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div className="bg-blue-600 h-3 rounded-full w-3/4"></div>

        </div>

      </div>

    </div>
  );
}