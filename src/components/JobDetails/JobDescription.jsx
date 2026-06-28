import { FaFileAlt } from "react-icons/fa";

export default function JobDescription() {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 mt-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
          <FaFileAlt />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Job Description
        </h2>

      </div>

      {/* Description */}

      <div className="space-y-5 text-gray-600 leading-8">

        <p>
          We are looking for a passionate <strong>Frontend Developer</strong>
          with experience in <strong>React.js</strong>, JavaScript, and modern
          web technologies. You will work closely with designers, backend
          developers, and product managers to build responsive, scalable, and
          high-performance web applications.
        </p>

        <p>
          Your primary responsibility will be developing reusable UI
          components, integrating REST APIs, improving application
          performance, fixing bugs, and delivering an excellent user
          experience across desktop and mobile devices.
        </p>

        <p>
          This is a great opportunity to work on real-world products,
          collaborate with experienced engineers, and grow your career
          in a fast-paced development environment.
        </p>

      </div>

    </section>
  );
}