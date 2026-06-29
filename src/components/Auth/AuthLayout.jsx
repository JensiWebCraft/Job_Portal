import { Link } from "react-router-dom";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="h-screen w-full flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900 text-white">

        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute top-1/3 right-20 h-24 w-24 rounded-full bg-white/10"></div>

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-16 text-center">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-lg">
              <FaBriefcase size={28} />
            </div>

            <h1 className="text-4xl font-bold">
              JobPortal
            </h1>

          </div>

          {/* Illustration */}
          <img
            src="/images/auth-hero.svg"
            alt="Career"
            className="mt-2 w-[380px] max-w-full"
          />

          {/* Heading */}
          <h2 className="mt-10 text-5xl font-extrabold leading-tight">
            Find Your
            <br />
            Dream Job
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
            Connect with thousands of companies,
            explore exciting opportunities,
            and build your career with confidence.
          </p>

          {/* Statistics */}
          <div className="mt-12 grid w-full max-w-md grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

              <h3 className="text-3xl font-bold">
                10K+
              </h3>

              <p className="mt-2 text-blue-100">
                Active Jobs
              </p>

            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

              <h3 className="text-3xl font-bold">
                5K+
              </h3>

              <p className="mt-2 text-blue-100">
                Companies
              </p>

            </div>

          </div>

          {/* Trust */}
          <div className="mt-10 flex items-center gap-2 text-lg">

            <FaCheckCircle className="text-green-400" />

            Trusted by 50,000+ Professionals

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full items-center justify-center bg-white px-8 lg:w-1/2">

        <div className="w-full max-w-md">

          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 lg:hidden"
          >
            <FaBriefcase className="text-blue-600" />

            <span className="text-3xl font-bold text-blue-700">
              JobPortal
            </span>
          </Link>

          <h1 className="text-5xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            {subtitle}
          </p>

          <div className="mt-10">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}