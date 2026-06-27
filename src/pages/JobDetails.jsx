import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobDetails() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen py-10">

        <div className="max-w-7xl mx-auto px-5">

          {/* Back Button */}

          <button className="text-blue-600 font-semibold mb-8 hover:underline">
            ← Back to Jobs
          </button>

          {/* Job Card */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            {/* Header */}

            <div className="flex justify-between items-start flex-wrap gap-5">

              <div className="flex gap-5">

                <div className="w-20 h-20 rounded-xl bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                  G
                </div>

                <div>

                  <h1 className="text-3xl font-bold">
                    Frontend Developer
                  </h1>

                  <p className="text-gray-500 mt-2">
                    Google
                  </p>

                  <div className="flex flex-wrap gap-5 mt-4 text-gray-600">

                    <span>📍 Bangalore</span>

                    <span>💰 ₹8 - 12 LPA</span>

                    <span>💼 Full Time</span>

                    <span>⭐ 4.8 Rating</span>

                  </div>

                </div>

              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Apply Now
              </button>

            </div>

            {/* About */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold mb-4">
                About this Job
              </h2>

              <p className="text-gray-600 leading-8">
                We are looking for a passionate Frontend Developer with React.js
                experience. You will work with our product team to build modern,
                responsive, and scalable web applications.
              </p>

            </section>

            {/* Responsibilities */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold mb-4">
                Responsibilities
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-600">

                <li>Build reusable React components</li>

                <li>Integrate REST APIs</li>

                <li>Write clean and maintainable code</li>

                <li>Fix bugs and improve performance</li>

              </ul>

            </section>

            {/* Requirements */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold mb-4">
                Requirements
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-600">

                <li>BCA / B.Tech / MCA</li>

                <li>Knowledge of React.js</li>

                <li>HTML, CSS, JavaScript</li>

                <li>Git & GitHub</li>

              </ul>

            </section>

            {/* Skills */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold mb-4">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  React
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  JavaScript
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  HTML
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  CSS
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  Tailwind CSS
                </span>

              </div>

            </section>

            {/* Company */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold mb-4">
                About Company
              </h2>

              <p className="text-gray-600 leading-8">
                Google is a global technology company focused on search,
                cloud computing, artificial intelligence, and software
                products used by millions of users worldwide.
              </p>

            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}