export default function CompanyInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Company Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Company Name"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Industry"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Company Size"
          className="border rounded-xl p-4"
        />

        <input
          type="number"
          placeholder="Founded Year"
          className="border rounded-xl p-4"
        />

        <input
          type="email"
          placeholder="Company Email"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Website"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="Address"
          className="border rounded-xl p-4"
        />

      </div>

    </div>
  );
}