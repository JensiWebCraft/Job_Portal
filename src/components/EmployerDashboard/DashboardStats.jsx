import {
  FaBriefcase,
  FaUsers,
  FaUserCheck,
  FaClipboardList,
} from "react-icons/fa";

const stats = [
  {
    title: "Jobs Posted",
    value: 25,
    icon: <FaBriefcase />,
  },
  {
    title: "Active Jobs",
    value: 18,
    icon: <FaClipboardList />,
  },
  {
    title: "Applicants",
    value: 320,
    icon: <FaUsers />,
  },
  {
    title: "Interviews",
    value: 24,
    icon: <FaUserCheck />,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {item.value}
              </h2>

            </div>

            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">

              {item.icon}

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}