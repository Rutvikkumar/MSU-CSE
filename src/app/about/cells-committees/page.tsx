// pages/committees-cells.js
"use client"
import Head from 'next/head';

export default function CommitteesCells() {
  const academicCommittees = [
    {
      title: "Curriculum Development Committee",
      description: "Oversees program structure, course content, and academic standards",
    },
    {
      title: "Research Advisory Committee",
      description: "Guides faculty research projects and promotes innovation",
    },
    {
      title: "Faculty Mentoring Committee",
      description: "Supports junior faculty through structured mentoring programs",
    },
    {
      title: "Industry Collaboration Committee",
      description: "Facilitates partnerships between academia and industry",
    },
  ];

  const supportCells = [
    {
      title: "Grievance Redressal Cell",
      description: "Addresses concerns from students and faculty members",
    },
    {
      title: "Entrepreneurship Development Cell",
      description: "Fosters innovation and startup culture among students",
    },
    {
      title: "Anti-Ragging Committee",
      description: "Ensures safe campus environment for all students",
    },
    {
      title: "Diversity & Inclusion Cell",
      description: "Promotes equal opportunities for all community members",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Committees & Cells | Faculty of Technology and Engineering</title>
        <meta name="description" content="Academic committees and support cells at Faculty of Technology and Engineering" />
      </Head>

      {/* Hero Section */}
      <div className="bg-sky-950 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Committees & Cells</h1>
          <p className="text-lg">Ensuring academic excellence and student welfare through dedicated teams</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">

        {/* Academic Committees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
            Academic Committees
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {academicCommittees.map((committee, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{committee.title}</h3>
                <p className="text-gray-600">{committee.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Cells */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">
            Support Cells
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {supportCells.map((cell, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{cell.title}</h3>
                <p className="text-gray-600">{cell.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Committee Contacts</h3>
          <p className="text-gray-700 mb-4">
            For more information about any committee or cell, please contact:
          </p>
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Dean's Office
          </button>
        </div>
      </div>
    </div>
  );
}
