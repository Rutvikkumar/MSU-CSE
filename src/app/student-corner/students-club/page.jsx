import Link from "next/link";

const EventCards = () => {
  // Sample data (replace with your actual data)
  const groups = [
    {
      id: 1,
      title: "Code Masters",
      description: "Weekly coding challenges, hackathons, and mentorship for aspiring developers.",
      link: "https://example.com/code-masters",
      events: [
        { id: 1, name: "AI Workshop", date: "Aug 5, 2024" },
        { id: 2, name: "Debugging Contest", date: "Aug 12, 2024" },
      ],
    },
    {
      id: 2,
      title: "Tech Innovators",
      description: "Learn cutting-edge technologies like Next.js, Tailwind, and blockchain.",
      link: "https://example.com/tech-innovators",
      events: [
        { id: 1, name: "Next.js Workshop", date: "Aug 8, 2024" },
        { id: 2, name: "Tailwind UI Contest", date: "Aug 15, 2024" },
      ],
    },
    {
      id: 3,
      title: "Data Science Club",
      description: "Master Python, ML, and data visualization through real-world projects.",
      link: "https://example.com/data-science-club",
      events: [
        { id: 1, name: "Kaggle Competition", date: "Aug 10, 2024" },
        { id: 2, name: "Python for Data Analysis", date: "Aug 17, 2024" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Student Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{group.title}</h2>
              <p className="text-gray-600 mb-4">{group.description}</p>
              
              {/* Upcoming Events (Sub-cards) */}
              <div className="space-y-3 mb-4">
                <h3 className="font-semibold text-gray-700">Upcoming Events:</h3>
                {group.events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500"
                  >
                    <p className="font-medium text-gray-800">{event.name}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                ))}
              </div>

              {/* Official Link */}
              <Link
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center w-full"
              >
                Visit Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;