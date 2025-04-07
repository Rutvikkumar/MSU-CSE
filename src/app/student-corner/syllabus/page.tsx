
import React from "react";
import Link from "next/link";

const syllabusData = [
  { title: "BE", description: "Bachelor of Engineering syllabus overview", link: "/student-corner/syllabus/be" },
  { title: "MCA", description: "Master of Computer Applications syllabus details", link: "/student-corner/syllabus/mca" },
  { title: "PhD", description: "Doctorate syllabus structure", link: "/student-corner/syllabus/phd" },
];

const SyllabusCards = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Syllabus Overview</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {syllabusData.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link
              href={course.link}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Syllabus
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusCards;