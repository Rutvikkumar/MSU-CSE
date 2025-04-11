"use client"; // Add this if you're using client-side features
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-96">
        <img
          src="/techo-home.png" // Replace with your university image
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            Welcome to Our University
          </h1>
        </div>
      </section>

      {/* About University Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Department of Computer Science and Engineering:
          </h2>
          <p>
            The Maharaja Sayajirao University was the first in the State of
            Gujarat to offer a Bachelor of Engineering Course in Computer
            Science and Engineering: BE(CSE) in the year 1982 and a
            Post-graduate three year Master of Computer Applications (MCA)
            course in the year 1984. Initially both the courses BE(CSE) and MCA
            were conducted under Electrical Engineering Department. In 1987
            Department of Computer Science and Engineering was established as an
            independent department. Ph.D (CSE) started in the year 2004. Since
            2020 the MCA course is now offered for 2 year duration with an
            intake of 45 students.
          </p>
          <p>
            It has been the endeavor of the department to bring excellence in
            every aspect of development and growth of departmental facilities
            both in teaching and extra-curricular activities. The main focus of
            the department is on strengthening UG/PG teaching, research in
            thrust areas and improving the infrastructure, which has resulted in
            reaching high degree of acceptance of students by IT industry
            reflecting almost 100%placement through campus recruitment.
          </p>
          <p>
            The MSU Computer Alumni Association was started in the year 1998 and
            became very active and dynamic in the year 2012. Since then, the
            alumni association has continued to assist the department in the
            development of infrastructure, renovation and activities related to
            the growth and progress of the students.
          </p>
          <p>
            Most of the Professors of the department hold Ph.D. degrees and are
            associated with NBA, NAAC, UGC CARE, UGC NET and UGC Standing
            Committee for Computer Centre and MCA course, AICTE Committees,
            Selection Committees of teaching staff etc., in several capacities.
          </p>
          <p>
            The Department is affiliated with other national level technical
            bodies like Computer Society of India (CSI), Institute of Engineers
            (IE), Institute of Electronics and Telecommunication Engineers
            (IETE) and Indira Gandhi National Open University (IGNOU). In
            collaboration with CSI, the department has been organizing several
            workshops, seminars and technical talks. The department is one of
            the major exam centers for the CCC+ exam of the Govt. of Gujarat.
          </p>
        </div>
      </section>

      {/* Creative Image Gallery Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Masonry-like layout */}
            <div className="space-y-6">
              <img
                src="/techo-home.png" // Tall image
                alt="Campus Image 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/techo-banner.png"
                alt="Campus Image 2"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/collage/FTE-collage.png" // Square image
                alt="Campus Image 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/collage/FTE-GATE.jpg" // Tall image
                alt="Campus Image 4"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/collage/collage.jpg"
                alt="Campus Image 5"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/collage/collage-nature.jpg" // Tall image
                alt="Campus Image 6"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Updated Quick Facts Section */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Quick Facts
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Fact 1: Students */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">200+</span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">Students</p>
              </div>

              {/* Fact 2: Faculty */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">15+</span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">
                  Faculty Members
                </p>
              </div>

              {/* Fact 3: Research Papers */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">50+</span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">
                  Research Papers
                </p>
              </div>

              {/* Fact 4: Labs */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">5+</span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">Labs</p>
              </div>

              {/* Fact 5: Founded */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">1990</span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">Founded</p>
              </div>

              {/* Fact 6: Location */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">
                  Gujarat
                </span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Our Location
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2e7d6a77f4c!2sUniversity%20of%20Melbourne!5e0!3m2!1sen!2sus!4v1622549404251!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
