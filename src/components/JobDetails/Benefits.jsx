import { FaGift, FaCheckCircle } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    "Health Insurance",
    "Flexible Working Hours",
    "Work From Home",
    "Paid Annual Leave",
    "Performance Bonus",
    "Learning & Development Budget",
    "Free Lunch & Snacks",
    "Team Outings & Events",
  ];

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">

      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
          <FaGift />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Benefits & Perks
        </h2>

      </div>

      {/* Benefits List */}
      <div className="grid gap-4 md:grid-cols-2">

        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg border border-gray-100 p-4 transition hover:bg-gray-50"
          >
            <FaCheckCircle className="text-green-500 text-lg" />

            <p className="text-gray-700">
              {benefit}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}