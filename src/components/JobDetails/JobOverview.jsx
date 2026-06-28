import {
  FaCalendarAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaClock,
  FaUsers,
} from "react-icons/fa";

export default function JobOverview() {
  const overview = [
    {
      icon: <FaCalendarAlt />,
      title: "Posted Date",
      value: "2 Days Ago",
    },
    {
      icon: <FaBriefcase />,
      title: "Job Type",
      value: "Full Time",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Salary",
      value: "₹8 - ₹12 LPA",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bangalore",
    },
    {
      icon: <FaUserGraduate />,
      title: "Experience",
      value: "2+ Years",
    },
    {
      icon: <FaUserGraduate />,
      title: "Education",
      value: "B.Tech / BCA / MCA",
    },
    {
      icon: <FaUsers />,
      title: "Vacancies",
      value: "5",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">

      <h2 className="text-2xl font-bold mb-8 text-slate-800">
        Job Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {overview.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 hover:shadow-md transition"
          >
            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
              {item.icon}
            </div>

            <div>
              <h4 className="text-sm text-gray-500">
                {item.title}
              </h4>

              <p className="font-semibold text-slate-800">
                {item.value}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}