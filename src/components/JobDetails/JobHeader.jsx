import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaUserTie,
  FaBookmark,
} from "react-icons/fa";

export default function JobHeader() {
  return (
    <section className="mb-8">

      {/* Back Button */}

      <Link
        to="/jobs"
        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 mb-6"
      >
        ← Back to Jobs
      </Link>

      {/* Card */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">

        <div className="flex flex-col lg:flex-row lg:items-center gap-8">

          {/* Left */}

          <div className="flex flex-1 items-start gap-6">

            {/* Logo */}

            <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-4xl font-bold shrink-0">
              G
            </div>

            {/* Information */}

            <div className="flex-1">

              <div className="flex items-center gap-3 flex-wrap">

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Frontend Developer
                </h1>

                <FaCheckCircle className="text-blue-600 text-xl" />

              </div>

              <p className="text-lg text-gray-500 mt-2">
                Google • Bangalore, Karnataka
              </p>

              {/* Rating */}

              <div className="flex items-center gap-2 mt-4">

                <div className="flex text-yellow-400 text-lg">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <span className="text-gray-600">
                  4.8 (2.1k Reviews)
                </span>

              </div>

              {/* Information */}

              <div className="flex flex-wrap gap-6 mt-6 text-gray-700">

                <div className="flex items-center gap-2">

                  <FaMapMarkerAlt className="text-red-500" />

                  Bangalore

                </div>

                <div className="flex items-center gap-2">

                  <FaBriefcase className="text-blue-600" />

                  Full Time

                </div>

                <div className="flex items-center gap-2">

                  <FaMoneyBillWave className="text-green-600" />

                  ₹8 - ₹12 LPA

                </div>

              </div>

              <div className="flex flex-wrap gap-6 mt-4 text-gray-700">

                <div className="flex items-center gap-2">

                  <FaClock className="text-gray-500" />

                  Posted 2 Days Ago

                </div>

                <div className="flex items-center gap-2">

                  <FaUserTie className="text-purple-600" />

                  2+ Years Experience

                </div>

              </div>

              {/* Tags */}

              <div className="mt-6 flex flex-wrap items-center gap-2">

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  React
                </span>

                <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  JavaScript
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
                  TypeScript
                </span>

                <span className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
                  Tailwind CSS
                </span>

                <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                  Urgent Hiring
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="w-full lg:w-52 xl:w-56 shrink-0 flex flex-col gap-4">

            <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">

              Apply Now

            </button>

            <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center gap-2">

              <FaBookmark />

              Save Job

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}