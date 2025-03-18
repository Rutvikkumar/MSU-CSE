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
          <h2 className="text-3xl font-bold text-blue-900 mb-8">About Our University</h2>
          <p className="text-gray-700 mb-4">
            Established in 1990, our university has been a beacon of quality education, 
            offering a wide range of undergraduate and postgraduate programs. We pride 
            ourselves on our state-of-the-art facilities, experienced faculty, and a 
            vibrant campus life that nurtures both academic and personal growth.
          </p>
          <p className="text-gray-700">
            Our mission is to empower students with knowledge and skills to shape the future.
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
                <p className="text-gray-700 font-serif text-lg">Faculty Members</p>
              </div>

              {/* Fact 3: Research Papers */}
              <div className="text-center">
                <span className="text-6xl font-bold text-blue-900">50+</span>
                <div className="my-4 h-px bg-blue-200"></div> {/* Divider */}
                <p className="text-gray-700 font-serif text-lg">Research Papers</p>
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
                <span className="text-6xl font-bold text-blue-900">Gujarat</span>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Location</h2>
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