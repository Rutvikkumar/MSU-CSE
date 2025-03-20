"use client"; // Add this if you're using client-side features
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-96">
        <img
          src="https://picsum.photos/id/1060/1920/1080" // Replace with your university image
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
            About Our University
          </h2>
          <p>
            The Faculty of Technology and Engineering as its stands today was
            formed along with the establishment of The Maharaja Sayajirao
            University in 1949. It is an outgrowth of what was popularly known
            as the Kala Bhavan Technical Institute (KBTI) established in June
            1890 by late His Highness The Maharaja Sayajirao Gaekwad III of
            Baroda State. Initially the idea was to teach drawing, bleaching,
            dyeing, calico printing and carpentry, thus starting the School of
            Weaving in the year 1897 which subsequently expanded to a course on
            dyeing. Prof. T. K. Gajjar was the first Principle of KBTI who built
            it with passion.
          </p>
          <p>
            Post Indian Independence, since 1949, the continued academic growth
            resulted in the creation of 14 departments, a huge workshop, a
            library and several buildings which were possible due to the
            financial support from various government organizations like UGC,
            MHRD, DST, AICTE and financial aid from UNDP, USAID, etc. and due to
            the dedicated efforts by the University, Deans and Teachers of the
            University. Located on an area of 17 acres, the Faculty of
            Technology & Engineering boasts of a heritage structure, spacious
            class rooms and modern state of art laboratories. The total number
            of academic programes across the 14 departments is 45 including the
            undergraduate (BE), post graduate (ME) & applied science (MSc). The
            BE program is among the most sought after in the State of Gujarat.
            Apart from these degree programs, all departments offer PhD degrees
            with guiding faculty from reputed Institutes of India. Recognizing
            the teaching and the academic standards of the Faculty, various
            private industries and also Government of Gujarat have instituted
            Centres of Excellence in the Faculty. These are the Siemens Centre
            for Industrial Automation, Anchor Institute for Textile Engineering,
            Centre of Excellence in Polymers and Centre of Excellence in
            Industrial Mathematics.
          </p>
          <p>
            The Training and Placement office of the Faculty facilitates the
            employment of the graduates and post graduates of the Faculty. Apart
            from pursuing academics the students of the Faculty are active in
            other spheres of human life. 'Footprints" is the largest technical
            extravaganza of Gujarat and is organized every year since more than
            a decade. This technical event is entirely organized by the budding
            engineers encouraging them to think beyond the closed classroom
            teaching. On the other hand "Paramarsh" is the largest non-technical
            event in the State of Gujarat. "Paramarsh" aims at installing
            qualities like "leadership", 'spirit of adventure', 'team spirit"
            among other qualities essential to build an all round personality of
            the students. One of the unique events organized by the students is
            'Prerna" , a social event organized at the National level to
            showcase the abilities of the differently abled students.
          </p>
          <p>
            With a strong teaching and research faculty, the Faculty of
            Technology & Engineering looks ahead to the future with a strong
            sense of confidence to emerge as one of the best places to pursue
            engineering or applied science studies and research in the country.
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
                src="https://picsum.photos/id/1040/400/600" // Tall image
                alt="Campus Image 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://picsum.photos/id/1041/400/300"
                alt="Campus Image 2"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://picsum.photos/id/1042/400/400" // Square image
                alt="Campus Image 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://picsum.photos/id/1043/400/500" // Tall image
                alt="Campus Image 4"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://picsum.photos/id/1044/400/300"
                alt="Campus Image 5"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://picsum.photos/id/1045/400/600" // Tall image
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
