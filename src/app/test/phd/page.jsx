"use client"

import Link from "next/link";

const PhD = () => {
  const syllabus = {
    "2015-2018": ["Year 1", "Year 2", "Year 3"],
    "2018-2022": ["Year 1", "Year 2", "Year 3"],
    "2022-2025": ["Year 1", "Year 2", "Year 3"],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Link href="/test" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-center my-6 text-blue-800">
        PhD Syllabus
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {Object.entries(syllabus).map(([years, sems]) => (
          <div key={years} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {years}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sems.map((sem) => (
                <div key={sem} className="border p-4 rounded-md hover:bg-gray-50">
                  <h3 className="font-medium">{sem}</h3>
                  <div className="flex gap-2 mt-2">
                    <a
                      href={`/syllabus/PhD/${years}/${sem}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm"
                    >
                      View
                    </a>
                    <a
                      href={`/syllabus/PhD/${years}/${sem}.pdf`}
                      download
                      className="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhD;