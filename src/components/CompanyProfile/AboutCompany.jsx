export default function AboutCompany() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-semibold mb-6">
        About Company
      </h2>

      <textarea
        rows="6"
        placeholder="Write about your company..."
        className="w-full border rounded-xl p-4 resize-none"
      ></textarea>

    </div>
  );
}