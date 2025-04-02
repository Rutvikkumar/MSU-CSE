// app/mou/page.tsx
"use client";

import { FiDownload, FiCalendar, FiFileText } from "react-icons/fi";

// Sample MOU data - replace with your actual PDFs
const mouData = [
  {
    year: "2024",
    agreements: [
      {
        id: 1,
        title: "MOU with Tech Solutions Inc.",
        date: "15-Mar-2024",
        pdfUrl: "/mou/tech-solutions-2024.pdf",
        description: "Covers internship & placement opportunities in software development"
      },
      {
        id: 2,
        title: "MOU with Global Analytics",
        date: "02-Feb-2024",
        pdfUrl: "/mou/global-analytics-2024.pdf",
        description: "Joint research program in data science"
      }
    ]
  },
  {
    year: "2023",
    agreements: [
      {
        id: 3,
        title: "MOU with InfraBuild Engineers",
        date: "10-Nov-2023",
        pdfUrl: "/mou/infrabuild-2023.pdf",
        description: "Civil engineering training partnership"
      }
    ]
  },
  {
    year: "2022",
    agreements: [
      {
        id: 4,
        title: "MOU with Digital Innovations",
        date: "05-Aug-2022",
        pdfUrl: "/mou/digital-innovations-2022.pdf",
        description: "Annual campus recruitment agreement"
      },
      {
        id: 5,
        title: "MOU with HealthCare Systems",
        date: "20-Jul-2022",
        pdfUrl: "/mou/healthcare-2022.pdf",
        description: "Biomedical equipment training program"
      }
    ]
  }
];

export default function MOULibrary() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MoU Archive</h1>
          <p className="text-lg text-gray-600">
            Memoranda of Understanding with our industry partners
          </p>
        </div>

        {/* Year-wise sections */}
        <div className="space-y-8">
          {mouData.map((yearData) => (
            <section key={yearData.year} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Year heading */}
              <div className="bg-blue-700 px-6 py-3">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <FiCalendar className="mr-2" />
                  {yearData.year} Agreements
                </h2>
              </div>

              {/* MOUs list */}
              <div className="divide-y divide-gray-200">
                {yearData.agreements.map((mou) => (
                  <div key={mou.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                          <FiFileText className="mr-2 text-blue-600" />
                          {mou.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Signed on {mou.date}
                        </p>
                        <p className="text-gray-600 mt-2">
                          {mou.description}
                        </p>
                      </div>
                      <a 
                        href={mou.pdfUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 px-3 py-1 border border-blue-200 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        <FiDownload className="mr-1" />
                        View PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">About Our MOUs</h3>
          <p className="text-blue-700">
            These Memoranda of Understanding formalize our partnerships with leading organizations,
            ensuring internship opportunities, campus recruitment drives, and collaborative projects
            for our students.
          </p>
        </div>
      </div>
    </div>
  );
}