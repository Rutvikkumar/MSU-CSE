import Head from 'next/head';
import Image from 'next/image';

export default function UniversityOverview() {
  return (
    <>
      <Head>
        <title>Maharaja Sayajirao University of Baroda | Premier Institution Since 1881</title>
        <meta name="description" content="Discover the rich heritage and academic excellence of MSU Baroda, a leading university in India with 14 faculties and 111 departments" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section with Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-12 h-96">
            <Image
              src="/collage/msu-collage.jpg" // Replace with your actual image path
              alt="MSU Baroda Main Building"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Maharaja Sayajirao University of Baroda
              </h1>
              <p className="text-xl text-amber-200">
                Est. 1881 • Vadodara, Gujarat
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-100 pb-4">
                  A Legacy of Academic Excellence
                </h2>
                
                <p className="mb-6 leading-relaxed">
                  Established in 1881 as the Baroda College of Science, our institution blossomed into the Maharaja Sayajirao University of Baroda (MSU) on April 30, 1949. Named after our visionary benefactor, Maharaja Sayajirao Gaekwad III, MSU has grown to become one of India's most prestigious centers of higher learning, blending tradition with innovation.
                </p>

                <div className="flex flex-col md:flex-row gap-8 my-10">
                  <div className="flex-1">
                    <Image
                      src="/collage/msu-dome.jpg" // Replace with dome image
                      alt="Iconic Dome of MSU"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Architectural Gem</h3>
                    <p className="leading-relaxed">
                      The university's main building, home to the Faculty of Arts, is a masterpiece of Indo-Saracenic architecture designed by Robert Fellowes Chisholm. Its magnificent dome, inspired by the Gol Gumbaz of Bijapur, stands as an iconic landmark in Vadodara and symbolizes our commitment to blending cultural heritage with academic pursuit.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comprehensive Academic Ecosystem</h3>
                <p className="mb-6 leading-relaxed">
                  Spanning 275 acres in the heart of Vadodara, MSU comprises 14 diverse faculties and 111 departments offering a comprehensive range of undergraduate, postgraduate, and doctoral programs. With an enrollment exceeding 35,000 students, we take pride in being the only university in Gujarat that uses English as the primary medium of instruction.
                </p>

                <div className="bg-amber-50 rounded-lg p-6 my-8 border-l-4 border-amber-500">
                  <h4 className="text-xl font-bold text-amber-800 mb-3">University at a Glance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-amber-700">Faculties</p>
                      <p className="text-3xl font-bold text-gray-800">14</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-700">Departments</p>
                      <p className="text-3xl font-bold text-gray-800">111+</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-700">Students</p>
                      <p className="text-3xl font-bold text-gray-800">35,000+</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-700">Established</p>
                      <p className="text-3xl font-bold text-gray-800">1881</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 my-10 bg-blue-50 rounded-lg p-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">Faculty of Fine Arts</h3>
                    <p className="leading-relaxed">
                      Established in 1950, our renowned Faculty of Fine Arts has played a pivotal role in shaping India's art education landscape. As one of the country's premier art institutions, it has produced generations of artists who have made significant contributions to both national and international art scenes.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/collage/FINE-ARTS.webp" // Replace with fine arts image
                      alt="Faculty of Fine Arts"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <blockquote className="border-l-4 border-amber-500 italic my-8 pl-6 text-gray-600">
                  "MSU Baroda stands as a beacon of knowledge, where tradition meets innovation, creating leaders who shape India's future while honoring its rich cultural heritage."
                </blockquote>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Looking Forward</h3>
                <p className="leading-relaxed font-medium text-gray-800">
                  Today, Maharaja Sayajirao University continues to uphold its legacy of academic excellence while embracing modern educational paradigms. As we move forward, we remain committed to providing transformative education, fostering groundbreaking research, and serving as a custodian of India's cultural heritage - truly making us a distinguished center for education and research in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}