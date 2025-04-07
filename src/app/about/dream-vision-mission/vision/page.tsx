export default function Vision() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      {" "}
      {/* Subtle gradient background */}
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Our <span className="text-blue-600">Vision</span> &{" "}
          <span className="text-green-600">Mission</span>
        </h1>

        {/* Vision Section */}
        <div className="mb-20 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-4 text-blue-600">🌟</span> Our Vision
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  v1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To be a globally recognized Computer Science and Engineering
                  department and a preferred destination for learners and
                  researchers.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mission Section */}
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-4 text-green-600">🚀</span> Our Mission
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  M1
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To impart nation-centered, affordable, equitable, and value
                  augmented quality education to learners in the field of
                  Computer Science and Engineering.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  M2
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To provide state-of-the-art and enabling educational
                  environment for innovation and high-impact research.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  M3
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To integrate vocational education as add-on courses & hands-on
                  training to all programs and to provide industry-linked
                  environment to make learners globally employable and to create
                  entrepreneurs with competitive edge as per the need of region,
                  nation, and society at large.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  M4
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To focus on holistic development through co-curricular
                  activities, extra-curricular activities, and soft skill
                  enhancement.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  M5
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To inculcate the core values in learners to make them good
                  citizens.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  M6
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed text-lg">
                  To collaborate with other departments of the University,
                  alumni, academic & research institutes and Industry.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
