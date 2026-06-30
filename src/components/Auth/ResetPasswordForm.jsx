import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="space-y-6">

      {/* New Password */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          New Password
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaLock className="text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            className="w-full p-4 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

      </div>

      {/* Confirm Password */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Confirm Password
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaLock className="text-gray-400" />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm new password"
            className="w-full p-4 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

      </div>

      {/* Password Tips */}

      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">

        <h4 className="font-semibold text-blue-700 mb-2">
          Password Requirements
        </h4>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Minimum 8 characters</li>
          <li>• One uppercase letter</li>
          <li>• One lowercase letter</li>
          <li>• One number</li>
          <li>• One special character</li>
        </ul>

      </div>

      {/* Reset Button */}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition"
      >
        Reset Password
      </button>

      {/* Back */}

      <Link
        to="/login"
        className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
      >
        <FaArrowLeft />

        Back to Login
      </Link>

    </form>
  );
}