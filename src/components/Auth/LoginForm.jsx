import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">

      {/* Email */}

      <div>

        <label className="mb-2 block font-medium text-slate-700">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border border-gray-300 px-4">

          <FaEnvelope className="text-gray-400" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent p-4 outline-none"
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="mb-2 block font-medium text-slate-700">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-gray-300 px-4">

          <FaLock className="text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full bg-transparent p-4 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-400" />
            ) : (
              <FaEye className="text-gray-400" />
            )}
          </button>

        </div>

      </div>

      {/* Remember */}

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm">

          <input type="checkbox" />

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-blue-600 hover:underline text-sm"
        >
          Forgot Password?
        </Link>

      </div>

      {/* Login Button */}

      <button
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Login
      </button>

      {/* Divider */}

      <div className="relative">

        <hr />

        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-500 text-sm">
          OR
        </span>

      </div>

      {/* Google */}

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-4 font-medium hover:bg-gray-50 transition"
      >

        <FaGoogle className="text-red-500" />

        Continue with Google

      </button>

      {/* Signup */}

      <p className="text-center text-gray-600">

        Don't have an account?

        <Link
          to="/signup"
          className="ml-2 font-semibold text-blue-600 hover:underline"
        >
          Sign Up
        </Link>

      </p>

    </form>
  );
}