import { FaTasks, FaCheckCircle } from "react-icons/fa";

export default function Responsibilities() {
  const responsibilities = [
    "Develop responsive and user-friendly React applications.",
    "Build reusable UI components following best practices.",
    "Integrate REST APIs with frontend applications.",
    "Optimize website performance and fix bugs.",
    "Collaborate with designers, backend developers, and QA teams.",
    "Write clean, maintainable, and scalable code.",
  ];

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
          <FaTasks />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Responsibilities
        </h2>
      </div>

      {/* List */}
      <div className="space-y-4">
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition"
          >
            <FaCheckCircle className="mt-1 text-lg text-green-500" />

            <p className="text-gray-600 leading-7">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}