import {
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function CompanyInfo() {
  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">

      {/* Heading */}

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
          <FaBuilding />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          About Company
        </h2>

      </div>

      {/* Company Header */}

      <div className="flex items-center gap-5 border-b border-gray-200 pb-6">

        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-blue-600 text-3xl font-bold text-white">
          G
        </div>

        <div>

          <h3 className="text-2xl font-bold text-slate-800">
            Google
          </h3>

          <p className="text-gray-500">
            Information Technology
          </p>

        </div>

      </div>

      {/* Company Details */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-blue-600" />
          <span>
            <strong>Founded:</strong> 1998
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaUsers className="text-blue-600" />
          <span>
            <strong>Employees:</strong> 180,000+
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-blue-600" />
          <span>
            <strong>Headquarters:</strong> Mountain View, California
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaGlobe className="text-blue-600" />
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.google.com
          </a>
        </div>

      </div>

      {/* About */}

      <div className="mt-8 border-t border-gray-200 pt-6">

        <h3 className="mb-4 text-xl font-semibold text-slate-800">
          About
        </h3>

        <p className="leading-8 text-gray-600">
          Google is a multinational technology company
          specializing in search engines, cloud computing,
          artificial intelligence, advertising, and software
          products. The company serves billions of users
          worldwide and provides excellent opportunities
          for learning, innovation, and career growth.
        </p>

      </div>

    </section>
  );
}