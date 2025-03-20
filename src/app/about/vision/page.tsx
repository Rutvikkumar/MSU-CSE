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
          <p className="text-gray-700 text-lg leading-relaxed">
            To emerge as a Centre of Excellence in Technical Education, Research
            and innovations for sustainable Development to create societal
            impact.
          </p>
        </div>

        {/* Mission Section */}
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-4 text-green-600">🚀</span> Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Promote ecosystem for acadamic excellence and innovative research in
            Technology and Engineering Foster Collaborations with Institutes and
            Industries Contribute towardsholistic and sustainable development
          </p>
        </div>
      </div>
    </section>
  );
}
