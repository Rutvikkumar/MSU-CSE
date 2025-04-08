import { beProgram } from '@/data/academics'
import ProgramDetails from '@/components/academics/ProgramDetails'

export default function BECSEPage() {
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-900 to-sky-950 p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Bachelor of Engineering in Computer Science and Engineering
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-sky-950 text-white text-xs font-semibold rounded-full">
            Under Graduate
          </span>
          <span className="px-3 py-1 bg-sky-950 text-white text-xs font-semibold rounded-full">
            Regular
          </span>
          <span className="px-3 py-1 bg-sky-950 text-white text-xs font-semibold rounded-full">
            4 Years (8 Semesters)
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
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row">
              <span className="text-gray-600 font-medium sm:w-1/4">Intake Capacity:</span>
              <span className="sm:w-3/4">60</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="text-gray-600 font-medium sm:w-1/4">Mode of Admission:</span>
              <span className="sm:w-3/4">Admission Through ACPC Portal</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="text-gray-600 font-medium sm:w-1/4">Application Period:</span>
              <span className="sm:w-3/4">22/09/2021 to 11/11/2021</span>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Eligibility Criteria
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Eligibility Group
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Required Qualification
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specialisation
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Min Percentage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap">10+2 Open Category</td>
                  <td className="px-4 py-2 whitespace-nowrap">Higher Secondary School Certificate (HSC)</td>
                  <td className="px-4 py-2 whitespace-nowrap">Science</td>
                  <td className="px-4 py-2 whitespace-nowrap">45%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap">10+2 Reserved Category</td>
                  <td className="px-4 py-2 whitespace-nowrap">Higher Secondary School Certificate (HSC)</td>
                  <td className="px-4 py-2 whitespace-nowrap">Science</td>
                  <td className="px-4 py-2 whitespace-nowrap">40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Admission Process
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              To apply in UG/PG: <a href="#" className="text-blue-600 hover:underline">ACPC Website</a>
            </li>
            <li>
              Students who are admitted to First year Degree/ Diploma/ Postgraduate Courses (B.E./ B. Arch./ B. Pharm./ Dip. /M.E./ MURP/ M. Pharm./ MCA/ MBA) through Admission Committee for Professional Courses (ACPC)/ Admission Committee for Professional Diploma Courses (ACPDC)/ AICTE/ PMSSS/ Govt. nominee etc. should report (within the stipulated time specified by the Admission Committee) to the office of the faculty/ institute in which he/she is admitted, submit the Admission Letter issued by the Admission Committee and Register on <a href="#" className="text-blue-600 hover:underline">MSUIS Website</a> to get enrolled in The Maharaja Sayajirao University of Baroda.
            </li>
            <li>
              They must register in the branch that is allotted to him/her by ACPC/ACPDC and not in any other branch of his/her choice. Such registrations, if made, will not be considered for their enrolment.
            </li>
            <li>
              Permanent Registration Number (PRN) will be alloted only after:
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Verification with ACPC/ACPDC Admission List</li>
                <li>Verification of Certificates and payment of the stipulated fees of The Maharaja Sayajirao University of Baroda For Diploma to Degree/</li>
                <li>Certificate to Diploma (Second year Lateral Admission) admitted students, please register on MSUIS Website</li>
              </ul>
            </li>
            <li>
              For Diploma to Degree/ Certificate to Diploma (Second year Lateral Admission) admitted students, please register on <a href="#" className="text-blue-600 hover:underline">MSUIS Website</a>.
            </li>
          </ol>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-gray-700">
            Academic Section, Faculty of Technology and Engineering<br />
            Telephone: <a href="tel:0265-2434188" className="text-blue-600 hover:underline">0265-2434188 Ext.106</a><br />
            Time: 11.30 AM to 5.30 PM
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-sky-950 text-white font-medium rounded-lg hover:bg-sky-900 transition duration-300 text-center"
          >
            Click here to Apply
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300 text-center"
          >
            Download Prospectus
          </a>
          <a
            href="/student-corner/syllabus/be"  // Update this path to your actual syllabus path
            className="px-6 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition duration-300 text-center"
          >
            View Syllabus
          </a>
        </div>
      </div>
    </div>
  )
}