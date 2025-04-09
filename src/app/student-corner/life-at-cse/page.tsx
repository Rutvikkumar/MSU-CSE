import Image from "next/image";
import Link from "next/link";

const DepartmentLife = () => {
  // Sample data - replace with your actual content
  const features = [
    {
      title: "Cutting-Edge Labs",
      description: "Our department boasts state-of-the-art computer labs with the latest hardware and software.",
      image: "/images/lab.jpg", // Replace with your image path
    },
    {
      title: "Hackathons & Competitions",
      description: "Regular coding competitions and hackathons to sharpen skills and foster innovation.",
      image: "/images/hackathon.jpg", // Replace with your image path
    },
    {
      title: "Industry Visits",
      description: "Opportunities to visit tech companies and interact with industry professionals.",
      image: "/images/industry-visit.jpg", // Replace with your image path
    },
    {
      title: "Guest Lectures",
      description: "Learn from renowned experts through our guest lecture series.",
      image: "/images/lecture.jpg", // Replace with your image path
    },
    {
      title: "Student Projects",
      description: "Showcase of innovative projects developed by our students.",
      image: "/images/projects.jpg", // Replace with your image path
    },
    {
      title: "Cultural Events",
      description: "Annual tech fests and cultural celebrations for holistic development.",
      image: "/images/cultural.jpg", // Replace with your image path
    },
  ];

  const clubs = [
    {
      name: "Code Warriors",
      description: "Competitive programming club",
      icon: "💻",
    },
    {
      name: "AI Enthusiasts",
      description: "Artificial intelligence research group",
      icon: "🤖",
    },
    {
      name: "Web Dev Society",
      description: "Frontend and backend development club",
      icon: "🌐",
    },
    {
      name: "Cyber Security",
      description: "Ethical hacking and security research",
      icon: "🔒",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/department-hero.jpg" // Replace with your hero image
          alt="Computer Department"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Computer Department Life</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Experience the vibrant academic and extracurricular life of our computer science community
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Technology Meets Innovation</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Our Computer Science Department offers more than just academics. We provide a dynamic environment
              where students can explore, create, and innovate through various activities, clubs, and events.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Student Clubs */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Student Clubs & Societies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 inline-block">{club.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{club.name}</h3>
                <p className="text-gray-600">{club.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Campus Life Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative h-48 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={`/images/gallery-${item}.jpg`} // Replace with your gallery images
                  alt={`Campus life ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <section className="py-12 bg-gray-100 rounded-xl px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <Image
                    src="/images/student1.jpg" // Replace with actual image
                    alt="Student"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Rahul Sharma</h4>
                  <p className="text-gray-600 text-sm">Final Year Student</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The department's hackathons and industry collaborations gave me practical experience that helped me land my dream job at a tech giant."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <Image
                    src="/images/student2.jpg" // Replace with actual image
                    alt="Student"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Priya Patel</h4>
                  <p className="text-gray-600 text-sm">Alumni</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The supportive faculty and excellent lab facilities helped me develop skills that I use every day in my software engineering career."
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Become part of our vibrant computer science department and shape your future in technology.
          </p>
          <Link
            href="/admissions"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </Link>
        </section>
      </section>
    </div>
  );
};
export default DepartmentLife;          