import React from "react";

const PhDCard = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-sky-900 to-sky-950 p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Ph.D in Computer Science and Engineering
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-sky-950 text-white text-xs font-semibold rounded-full">
            Doctorate
          </span>
          <span className="px-3 py-1 bg-sky-950 text-white text-xs font-semibold rounded-full">
            Regular Program
          </span>
          <span className="px-3 py-1 bg-sky-950 text-white text-xs font-semibold rounded-full">
            Min 3 Years
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Program Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Program Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="text-gray-600 font-medium">Intake Capacity:</span>
              <span className="mt-1">48</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 font-medium">Mode of Admission:</span>
              <span className="mt-1">Entrance Test [PET]/GATE/SET/NET + Personal Interview</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 font-medium">Application Period:</span>
              <span className="mt-1">To be announced</span>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Eligibility Criteria
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Required Qualifications:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>ME/M.Tech in Computer Science & Engineering (CSE)</li>
              <li>ME/M.Tech in Information Technology (IT)</li>
              <li>Master of Computer Applications (MCA)</li>
            </ul>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Admission Process
          </h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sky-950 flex items-center justify-center">
                <span className="text-white font-medium">1</span>
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  Candidates must qualify in any of the following entrance tests:
                  <span className="block mt-1 ml-4">
                    - PET (University Entrance Test)<br />
                    - GATE<br />
                    - SET/NET
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sky-950 flex items-center justify-center">
                <span className="text-white font-medium">2</span>
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  Shortlisted candidates will be called for a Personal Interview
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sky-950 flex items-center justify-center">
                <span className="text-white font-medium">3</span>
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  Final selection based on entrance test scores and interview performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Potential Research Areas
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Artificial Intelligence
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Machine Learning
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Data Science
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Cloud Computing
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Cybersecurity
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              IoT
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Blockchain
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">For More Information</h2>
          <p className="text-gray-700">
            Computer Science and Engineering Department<br />
            Faculty of Technology and Engineering<br />
            The Maharaja Sayajirao University of Baroda
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-sky-950 text-white font-medium rounded-lg hover:bg-sky-700 transition duration-300 text-center"
          >
            Click here to Apply
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-sky-950 text-sky-950 font-medium rounded-lg hover:bg-sky-400 transition duration-300 text-center"
          >
            Download Prospectus
          </a>
          <a
            href="/syllabus/becse"  // Update this path to your actual syllabus path
            className="px-6 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition duration-300 text-center"
          >
            View Syllabus
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhDCard;