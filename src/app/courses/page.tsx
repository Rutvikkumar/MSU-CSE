'use client';
import { useState } from 'react';

const courses = [
    {
        id: 'BE', title: 'Bachelor of Engineering', description: (<table className="table-auto w-full border-collapse border border-gray-300 mt-2">
            <tbody>
                <tr><td className="border px-4 py-2 font-semibold w-1/4">Program:</td><td className="border px-4 py-2">	Bachelor of Engineering in Computer Science and Engineering</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Details:</td><td className="border px-4 py-2">Admission for Professional Courses:

                    1	:	To apply in UG/PG: ACPC Website
                    2	:	Students who are admitted to First year Degree/ Diploma/ Postgraduate Courses (B.E./ B. Arch./ B. Pharm./ Dip. /M.E./ MURP/ M. Pharm./ MCA/ MBA) through Admission Committee for Professional Courses (ACPC)/ Admission Committee for Professional Diploma Courses (ACPDC)/ AICTE/ PMSSS/ Govt. nominee etc. should report (within the stipulated time specified by the Admission Committee) to the office of the faculty/ institute in which he/she is admitted, submit the Admission Letter issued by the Admission Committee and Register on MSUIS Website to get enrolled in The Maharaja Sayajirao University of Baroda.
                    3	:	They must register in the branch that is allotted to him/her by ACPC/ACPDC and not in any other branch of his/her choice. Such registrations, if made, will not be considered for their enrolment.
                    4	:	Permanent Registration Number (PRN) will be alloted only after:
                    i : Verification with ACPC/ACPDC Admission List
                    ii: Verification of Certificates and payment of the stipulated fees of The Maharaja Sayajirao University of Baroda For Diploma to Degree/
                    iii:Certificate to Diploma (Second year Lateral Admission) admitted students, please register on MSUIS Website
                    5	:	For Diploma to Degree/ Certificate to Diploma (Second year Lateral Admission) admitted students, please register on MSUIS Website.</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Program level:</td><td className="border px-4 py-2">Through ACPC Portal</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Program mode:(Open Category)</td><td className="border px-4 py-2">10+2 Science with min 45%</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Subjects offered:(Reserved Category)</td><td className="border px-4 py-2">10+2 Science with min 40%</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Eligibility criteria:</td><td className="border px-4 py-2">Eligibility Group	:	10+2 Open Category
                    Required Qualification	:	Higher Secondary School Certificate (HSC)
                    Specialisation(If Any)	:	Science
                    Min Percentage	:	45
                    OR
                    Eligibility Group	:	10+2 Reserved Category
                    Required Qualification	:	Higher Secondary School Certificate (HSC)
                    Specialisation(If Any)	:	Science
                    Min Percentage	:	40</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Intake capacity:</td><td className="border px-4 py-2">60</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Duration of Program:</td><td className="border px-4 py-2">4 years (8 Semesters)</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Mode of Admission:</td><td className="border px-4 py-2"> Admission:	Admission Through ACPC Portal</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Opening Dates for online application:</td><td className="border px-4 py-2">22/09/2021</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Closing Date for Application</td><td className="border px-4 py-2">11/11/2021</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Contact Person Info:</td><td className="border px-4 py-2">Academic Section, Faculty of Technology and Engineering, Tel: 0265-2434188 Ext.106 (11.30 AM - 5.30 PM)</td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Application Link</td><td className="border px-4 py-2"><a href="#" className="text-blue-500 underline">Click here to Apply</a></td></tr>
                <tr><td className="border px-4 py-2 font-semibold">Prospectus:</td><td className="border px-4 py-2"><a href="#" className="text-blue-500 underline">Download</a></td></tr>
            </tbody>
        </table>)
    },
    { id: 'BCA', title: 'Bachelor of Computer Applications', description: 'BCA is an undergraduate degree that covers computer programming, software development, and IT technologies.' },
    { id: 'PhD', title: 'Doctor of Philosophy', description: 'PhD is a research-based degree that allows students to explore advanced concepts in their field of study.' }
];

export default function CourseTabs() {
    const [activeTab, setActiveTab] = useState('BE');

    return (
        <div className="max-w-6xl mx-auto mt-10 mb-10 min-h-96">
            <div className="flex border-b border-gray-300">
                {courses.map((course) => (
                    <button
                        key={course.id}
                        className={`px-4 py-2 text-lg font-semibold focus:outline-none ${activeTab === course.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
                        onClick={() => setActiveTab(course.id)}
                    >
                        {course.id}
                    </button>
                ))}
            </div>
            <div className="p-4 border border-gray-300 mt-2 rounded-lg bg-white shadow-md">
                {courses.map((course) => (
                    activeTab === course.id && (
                        <div key={course.id}>
                            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                            <p className="text-gray-700">{course.description}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
