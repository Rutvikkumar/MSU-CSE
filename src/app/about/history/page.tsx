"use client"; // Add this if you're using client-side features

export default function DepartmentHistoryWrapper() {
  return (
    <section className="bg-gray-50 py-16"> {/* Lighter gray background */}
      <div className="max-w-6xl mx-auto px-8">
        {/* Introductory Text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6"> {/* Darker text for contrast */}
            Our Journey Through the Years
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* Subtle gray text for readability */}
            Over the decades, our department has grown from a small group of visionaries to a
            leading institution in technology and innovation. Through groundbreaking research,
            cutting-edge programs, and a commitment to excellence, we have shaped the future
            of computer science and inspired generations of students.
          </p>
        </div>

        {/* Department History Component */}
        <DepartmentHistory />
      </div>
    </section>
  );
}

function DepartmentHistory() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div> {/* Neutral timeline line */}

      {/* Timeline Items */}
      <div className="space-y-16">
        {/* Event 1: 1990 */}
        <div className="flex flex-col items-center relative">
          {/* Year Label */}
          <div className="text-center mb-8">
            <span className="text-2xl font-bold text-white bg-blue-600 p-3 rounded-lg shadow-lg">
              1990
            </span>
          </div>

          {/* Event Content */}
          <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600 relative"> {/* White event background */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4"> {/* Darker text for contrast */}
              Department Founded
            </h2>
            <p className="text-gray-700 mb-6"> {/* Subtle gray text for readability */}
              The Department of Computer Science was established in 1990 with a mission to
              provide world-class education and foster innovation in technology. Our founders
              envisioned a future where technology would drive societal progress.
            </p>
            <img
              src="https://picsum.photos/id/1060/800/400" // Replace with actual image
              alt="Department Founding"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          </div>
        </div>

        {/* Event 2: 2000 */}
        <div className="flex flex-col items-center relative">
          {/* Year Label */}
          <div className="text-center mb-8">
            <span className="text-2xl font-bold text-white bg-green-600 p-3 rounded-lg shadow-lg">
              2000
            </span>
          </div>

          {/* Event Content */}
          <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600 relative"> {/* White event background */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4"> {/* Darker text for contrast */}
              Introduction of AI Program
            </h2>
            <p className="text-gray-700 mb-6"> {/* Subtle gray text for readability */}
              In 2000, the department introduced a specialized program in Artificial
              Intelligence, becoming one of the first universities to offer such a course.
              This program has since produced some of the brightest minds in the field.
            </p>
            <img
              src="https://picsum.photos/id/107/800/400" // Replace with actual image
              alt="AI Program"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          </div>
        </div>

        {/* Event 3: 2010 */}
        <div className="flex flex-col items-center relative">
          {/* Year Label */}
          <div className="text-center mb-8">
            <span className="text-2xl font-bold text-white bg-purple-600 p-3 rounded-lg shadow-lg">
              2010
            </span>
          </div>

          {/* Event Content */}
          <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600 relative"> {/* White event background */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4"> {/* Darker text for contrast */}
              Research Lab Inauguration
            </h2>
            <p className="text-gray-700 mb-6"> {/* Subtle gray text for readability */}
              A state-of-the-art research lab was inaugurated in 2010, focusing on
              cutting-edge technologies like machine learning and data science. The lab
              has since become a hub for innovation and collaboration.
            </p>
            <img
              src="https://picsum.photos/id/1062/800/400" // Replace with actual image
              alt="Research Lab"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          </div>
        </div>

        {/* Event 4: 2020 */}
        <div className="flex flex-col items-center relative">
          {/* Year Label */}
          <div className="text-center mb-8">
            <span className="text-2xl font-bold text-white bg-orange-600 p-3 rounded-lg shadow-lg">
              2020
            </span>
          </div>

          {/* Event Content */}
          <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-600 relative"> {/* White event background */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4"> {/* Darker text for contrast */}
              Online Learning Initiative
            </h2>
            <p className="text-gray-700 mb-6"> {/* Subtle gray text for readability */}
              In response to the global pandemic, the department launched an online
              learning platform, ensuring uninterrupted education for students. This
              initiative has since become a cornerstone of our educational approach.
            </p>
            <img
              src="https://picsum.photos/id/1063/800/400" // Replace with actual image
              alt="Online Learning"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}