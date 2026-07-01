export default function SocialLinks() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Social Links
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="LinkedIn URL"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Facebook URL"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Twitter / X URL"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Instagram URL"
          className="w-full border rounded-xl p-4"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
          Save Changes
        </button>

      </div>

    </div>
  );
}