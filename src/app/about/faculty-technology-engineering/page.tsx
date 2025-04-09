"use client"

import Head from 'next/head';
import Image from 'next/image';

export default function Introduction() {
  return (
    <>
      <Head>
        <title>Faculty of Technology and Engineering - MSU Baroda</title>
        <meta name="description" content="Discover the rich history and modern excellence of the Faculty of Technology and Engineering at The Maharaja Sayajirao University of Baroda" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section with Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-12 h-96">
            <Image
              src="/collage/FTE-GATE.jpg" // Replace with your actual image path
              alt="Faculty of Technology and Engineering Building"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Faculty of Technology and Engineering
              </h1>
              <p className="text-xl text-blue-200">
                Est. 1890 • MSU Baroda
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-100 pb-4">
                  A Legacy of Technical Excellence
                </h2>

                <p className="mb-6 leading-relaxed">
                  Established in June 1890 by the visionary Maharaja Sayajirao Gaekwad III, the Faculty of Technology and Engineering (originally known as the Kala Bhavan Technical Institute) stands as a monument to India's rich technical education heritage. Our journey began in the Senapati Bhavan before moving in 1892 to our current iconic location in a majestic palatial building gifted by the Maharaja himself.
                </p>

                <div className="flex flex-col md:flex-row gap-8 my-10">
                  <div className="flex-1">
                    <Image
                      src="/collage/FTE-collage.png" // Replace with architectural detail image
                      alt="Indo-Saracenic Architecture"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Architectural Marvel</h3>
                    <p className="leading-relaxed">
                      Designed by renowned architect A.H. Coyle, our main building showcases exquisite Indo-Saracenic architecture. The "E" shaped structure features semi-circular arches, pedimented windows adorned with murals, and classical pilasters - a perfect blend of traditional craftsmanship and modern functionality that continues to inspire generations of students.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Modern Transformation</h3>
                <p className="mb-6 leading-relaxed">
                  In 1949, with the establishment of The Maharaja Sayajirao University of Baroda, we evolved into the Faculty of Technology and Engineering. Today, we proudly encompass 14 dynamic departments offering cutting-edge specializations in Engineering, Architecture, and Applied Sciences. Our continually updated curricula ensure students stay at the forefront of technological advancement.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 my-8 border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-blue-800 mb-3">Academic Offerings</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Undergraduate Programs
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Postgraduate Studies
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Doctoral Research
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Professional Development
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Knowledge Hub</h3>
                <p className="mb-6 leading-relaxed">
                  Our Prof. T.K. Gajjar Library (named after the first principal of KBTI) serves as the intellectual heart of the faculty. With approximately 130,651 books and 61 journal subscriptions, we support the academic needs of over 2,700 registered scholars in engineering and technology disciplines.
                </p>

                <blockquote className="border-l-4 border-blue-500 italic my-8 pl-6 text-gray-600">
                  "The Faculty of Technology and Engineering continues to uphold its legacy of academic excellence while innovating for the future - shaping minds that will build tomorrow's India."
                </blockquote>

                <p className="leading-relaxed font-medium text-gray-800">
                  For over 130 years, we have stood at the forefront of technical education in India, producing graduates who have made significant contributions across industries worldwide. As we look to the future, we remain committed to maintaining this tradition of excellence while embracing the challenges and opportunities of the 21st century.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}