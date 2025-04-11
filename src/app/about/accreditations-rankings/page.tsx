// pages/accreditations-rankings.js
import Head from 'next/head';

export default function AccreditationsRankings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Accreditations & Rankings | Faculty of Technology and Engineering</title>
        <meta name="description" content="Official accreditations and rankings of Faculty of Technology and Engineering" />
      </Head>

      {/* Hero Section */}
      <div className="bg-sky-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accreditations & Rankings</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Recognized Excellence in Engineering Education
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Accreditations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-600 pb-2">
            Our Accreditations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accreditation Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">NAAC Accreditation</h3>
                </div>
                <p className="text-gray-600">
                  Awarded 'A+' Grade by the National Assessment and Accreditation Council (NAAC) with a CGPA of 3.51 out of 4.0.
                </p>
              </div>
            </div>

            {/* Accreditation Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">NBA Accreditation</h3>
                </div>
                <p className="text-gray-600">
                  All our undergraduate programs are accredited by the National Board of Accreditation (NBA) under Tier-I category.
                </p>
              </div>
            </div>

            {/* Accreditation Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Washington Accord</h3>
                </div>
                <p className="text-gray-600">
                  Our engineering programs are recognized under the Washington Accord, facilitating global mobility for our graduates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-600 pb-2">
            National & International Rankings
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Position Among Leading Institutions</h3>
              
              <div className="space-y-6">
                {/* Ranking 1 */}
                <div className="flex flex-col md:flex-row md:items-center border-b border-gray-200 pb-4">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <span className="inline-block bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded">
                      #15
                    </span>
                    <span className="ml-2 text-gray-600 font-medium">in India</span>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-gray-800">NIRF Engineering Rankings 2023</h4>
                    <p className="text-gray-600">Ministry of Education, Government of India</p>
                  </div>
                </div>

                {/* Ranking 2 */}
                <div className="flex flex-col md:flex-row md:items-center border-b border-gray-200 pb-4">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <span className="inline-block bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded">
                      Top 200
                    </span>
                    <span className="ml-2 text-gray-600 font-medium">in Asia</span>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-gray-800">QS Asia University Rankings 2023</h4>
                    <p className="text-gray-600">Quacquarelli Symonds</p>
                  </div>
                </div>

                {/* Ranking 3 */}
                <div className="flex flex-col md:flex-row md:items-center border-b border-gray-200 pb-4">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <span className="inline-block bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded">
                      #8
                    </span>
                    <span className="ml-2 text-gray-600 font-medium">in India</span>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-gray-800">Times Engineering Institute Rankings 2023</h4>
                    <p className="text-gray-600">Times of India Group</p>
                  </div>
                </div>

                {/* Ranking 4 */}
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 mb-2 md:mb-0">
                    <span className="inline-block bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded">
                      Top 100
                    </span>
                    <span className="ml-2 text-gray-600 font-medium">Worldwide</span>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-gray-800">THE Young University Rankings 2023</h4>
                    <p className="text-gray-600">Times Higher Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-600 pb-2">
            Recognitions & Memberships
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Memberships</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Member of Association of Indian Universities (AIU)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Institutional Member of Indian Society for Technical Education (ISTE)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognized by All India Council for Technical Education (AICTE)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry Recognitions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognized as "Center of Excellence" by leading tech companies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Academic Partner for Siemens, Microsoft, and IBM</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Received "Best Engineering College" award from State Government</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pursue Excellence in Engineering</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Join a community recognized for academic excellence and industry-relevant education.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}