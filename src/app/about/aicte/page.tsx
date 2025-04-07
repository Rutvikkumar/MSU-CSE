// app/about/aicte/page.tsx
import { Download } from "lucide-react";
import Link from "next/link";

export default function AictePage() {
  // Sample data - replace with your actual PDF files
  const documents = [
    {
      title: "LOA Report 2024-25",
      description: "Letter of Approval for the academic year 2024-25",
      filePath: "/documents/aicte/LOA_Report_2024-25.pdf",
    },
    {
      title: "AICTE Compliance Report 2023-24",
      description: "Annual compliance report submitted to AICTE",
      filePath: "/documents/aicte/Compliance_Report_2023-24.pdf",
    },
    {
      title: "NBA Accreditation Document",
      description: "Latest NBA accreditation details and status",
      filePath: "/documents/aicte/NBA_Accreditation.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            AICTE Documents
          </h1>
          <p className="text-lg text-gray-600">
            Official documents and reports submitted to AICTE
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              About AICTE Approval
            </h2>
            <p className="mt-2 text-gray-600">
              The All India Council for Technical Education (AICTE) is the
              statutory body responsible for proper planning and coordinated
              development of the technical education system in India. Below are
              the official documents related to our AICTE approval and compliance.
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {doc.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{doc.description}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link
                      href={doc.filePath}
                      download
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Download className="-ml-1 mr-2 h-5 w-5" />
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-4">
            <p className="text-sm text-gray-500">
              For any queries regarding AICTE documents, please contact the
              administration office.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}