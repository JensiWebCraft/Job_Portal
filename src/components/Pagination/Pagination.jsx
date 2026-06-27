import React from 'react'

function Pagination() {
  return (
<div className="flex items-center justify-center gap-4 py-10">
  <button className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
    Previous
  </button>

  <button className="h-12 w-12 rounded-lg bg-blue-600 text-white font-semibold">
    1
  </button>

  <button className="h-12 w-12 rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition">
    2
  </button>

  <button className="h-12 w-12 rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition">
    3
  </button>

  <button className="h-12 w-12 rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition">
    4
  </button>

  <button className="h-12 w-12 rounded-lg border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition">
    5
  </button>

  <button className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
    Next
  </button>
</div>
  );
}

export default Pagination;