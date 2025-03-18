export default function Vision() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20"> {/* Subtle gradient background */}
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Our <span className="text-blue-600">Vision</span> & <span className="text-green-600">Mission</span>
        </h1>

        {/* Vision Section */}
        <div className="mb-20 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-4 text-blue-600">🌟</span> Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To be a globally recognized department that fosters innovation, excellence, and leadership in Information Technology. We aim to empower our students with cutting-edge knowledge and skills to drive technological advancements and solve real-world challenges.
          </p>
        </div>

        {/* Mission Section */}
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-4 text-green-600">🚀</span> Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide a transformative educational experience that combines rigorous academic training with practical, hands-on learning. We strive to cultivate a culture of innovation, collaboration, and ethical responsibility, preparing our students to excel in the ever-evolving field of IT.
          </p>
        </div>
      </div>
    </section>
  );
}