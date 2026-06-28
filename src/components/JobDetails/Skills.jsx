import { FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "REST API",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">

      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
          <FaTools />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Required Skills
        </h2>

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-4">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}