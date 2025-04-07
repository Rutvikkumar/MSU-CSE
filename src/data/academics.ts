export const programs = [
  {
    id: 'be-cse',
    title: 'Bachelor of Engineering (CSE)',
    duration: '4 Years',
    degree: 'B.E. in Computer Science & Engineering',
    description: 'Undergraduate program focusing on core computer science concepts and practical applications.',
    link: '/academics/be-cse',
  },
  {
    id: 'mca',
    title: 'Master of Computer Applications',
    duration: '3 Years',
    degree: 'MCA',
    description: 'Postgraduate program emphasizing application development and advanced computing concepts.',
    link: '/academics/mca',
  },
  {
    id: 'phd-cse',
    title: 'Ph.D. in Computer Science',
    duration: '3-6 Years',
    degree: 'Ph.D.',
    description: 'Research program for in-depth study in specialized areas of computer science.',
    link: '/academics/phd-cse',
  },
]

export const beProgram = {
  id: 'be-cse',
  title: 'Bachelor of Engineering in Computer Science & Engineering',
  overview: `
      <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Bachelor of Engineering in Computer Science and Engineering
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
            Under Graduate
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
            Regular
          </span>
          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
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
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 text-center"
          >
            Click here to Apply
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300 text-center"
          >
            Download Prospectus
          </a>
        </div>
      </div>
    </div>
    `,
  curriculum: {
    semesters: [
      {
        semester: 1,
        subjects: ['Mathematics-I', 'Physics', 'Basic Electrical Engineering', 'Programming Fundamentals']
      },
      // ... other semesters
    ]
  },
  admissions: {
    eligibility: '10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks',
    intake: 60,
    selection: 'Based on GUJCET/JEE Main scores and counseling'
  },
  syllabus: {
    link: '/student-corner/syllabus',
    description: 'Detailed syllabus for all semesters is available in the Student Corner'
  }
}

export const mcaProgram = {
  id: 'mca',
  title: 'Master of Computer Applications',
  overview: `
      The MCA program is a 3-year postgraduate course designed to provide advanced 
      knowledge in computer applications with emphasis on software development, 
      system design, and emerging technologies. The program includes industry-oriented 
      projects and internships.
    `,
  curriculum: {
    semesters: [
      {
        semester: 1,
        subjects: ['Programming in C', 'Discrete Mathematics', 'Computer Organization', 'Business Systems']
      },
      // ... other semesters
    ]
  },
  admissions: {
    eligibility: 'Bachelor\'s degree with Mathematics at 10+2 or graduation level with minimum 50% marks',
    intake: 30,
    selection: 'Based on university entrance exam and interview'
  },
  syllabus: {
    link: '/student-corner/syllabus',
    description: 'Detailed syllabus for all semesters is available in the Student Corner'
  }
}

// In data/academics.ts
export const phdProgram = {
  id: 'phd-cse',
  title: 'Doctor of Philosophy in Computer Science & Engineering',
  overview: `
    The Ph.D. program offers research opportunities in cutting-edge areas of 
    computer science. Candidates work under the guidance of experienced faculty 
    members and contribute to original research that advances the field.
  `,
  // Add curriculum data (can be simplified for PhD)
  curriculum: {
    semesters: [
      {
        semester: 1,
        subjects: ['Research Methodology', 'Advanced Topics in Computer Science']
      },
      // Other semesters if needed
    ]
  },
  admissions: {
    eligibility: 'Master\'s degree in CSE/IT or related field with minimum 55% marks',
    selection: 'Based on entrance test and interview',
    duration: 'Minimum 3 years',
    intake: 10 // Adding intake for consistency
  },
  // Add syllabus info
  syllabus: {
    link: '/research-consultancy/phd-program',
    description: 'PhD course work and research syllabus'
  },
  // Keep the additional PhD-specific fields
  supervisors: {
    count: 8,
    areas: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Networking',
      'Cyber Security'
    ]
  },
  scholars: {
    current: 15,
    graduated: 42
  }
}