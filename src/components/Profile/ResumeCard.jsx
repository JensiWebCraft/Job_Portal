import { FaFilePdf, FaUpload, FaDownload } from "react-icons/fa";

export default function ResumeCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <div className="flex items-center gap-3 mb-5">
        <FaFilePdf className="text-red-600 text-2xl" />
        <h2 className="text-2xl font-semibold">
          Resume
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        Resume.pdf
      </p>

      <div className="flex gap-4">

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          <FaUpload />
          Upload
        </button>

        <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50">
          <FaDownload />
          Download
        </button>

      </div>

    </div>
  );
}