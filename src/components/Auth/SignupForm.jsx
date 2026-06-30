import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="space-y-5">

      {/* Full Name */}
      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Full Name
        </label>

        <div className="flex items-center border rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaUser className="text-gray-400" />

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-4 outline-none"
          />

        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Email Address
        </label>

        <div className="flex items-center border rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaEnvelope className="text-gray-400" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 outline-none"
          />

        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Password
        </label>

        <div className="flex items-center border rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaLock className="text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
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

        <div className="flex items-center border rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaLock className="text-gray-400" />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
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

      {/* Terms */}
      <div className="flex items-start gap-2 text-sm">

        <input type="checkbox" className="mt-1" />

        <p>
          I agree to the{" "}
          <Link
            to="/terms"
            className="text-blue-600 font-medium"
          >
            Terms & Conditions
          </Link>
        </p>

      </div>

      {/* Signup Button */}
      <button
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Create Account
      </button>

      {/* Divider */}
      <div className="relative my-6">

        <hr />

        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-500">
          OR
        </span>

      </div>

      {/* Google */}
      <button
        type="button"
        className="w-full border rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-gray-50"
      >
        <FaGoogle className="text-red-500" />

        Continue with Google
      </button>

      {/* Login */}
      <p className="text-center text-gray-600">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </form>
  );
}