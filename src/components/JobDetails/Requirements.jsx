import { FaClipboardList, FaCheckCircle } from "react-icons/fa";

export default function Requirements() {
  const requirements = [
    "Bachelor's Degree (BCA / B.Tech / MCA)",
    "2+ Years of Frontend Development Experience",
    "Strong knowledge of React.js and JavaScript",
    "Good understanding of HTML5, CSS3, and Responsive Design",
    "Experience with Git and GitHub",
    "Knowledge of REST API Integration",
    "Good communication and teamwork skills",
    "Problem-solving and debugging skills",
  ];

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">

      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
          <FaClipboardList />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          Requirements
        </h2>

      </div>

      {/* List */}

      <div className="space-y-4">

        {requirements.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4 rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition"
          >

            <FaCheckCircle className="mt-1 text-green-500 text-lg" />

            <p className="text-gray-600 leading-7">
              {item}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}