import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function ForgotPasswordForm() {
  return (
    <form className="space-y-6">

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold text-slate-700">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:ring-2 focus-within:ring-blue-500">

          <FaEnvelope className="text-gray-400" />

          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full bg-transparent p-4 outline-none"
          />

        </div>
      </div>

      {/* Send Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Send Reset Link
      </button>

      {/* Divider */}
      <div className="relative">

        <hr />

        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-gray-500 text-sm">
          OR
        </span>

      </div>

      {/* Back */}
      <Link
        to="/login"
        className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 py-4 font-medium text-slate-700 transition hover:bg-gray-50"
      >
        <FaArrowLeft />

        Back to Login
      </Link>

    </form>
  );
}