const stats = [
  {
    title: "Applied Jobs",
    value: 15,
  },
  {
    title: "Saved Jobs",
    value: 8,
  },
  {
    title: "Interviews",
    value: 3,
  },
  {
    title: "Profile Views",
    value: 120,
  },
];

export default function ActivityCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-slate-50 rounded-xl p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-blue-600">
              {item.value}
            </h3>

            <p className="mt-2 text-gray-600">
              {item.title}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}