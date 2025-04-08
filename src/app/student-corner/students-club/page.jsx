import Link from "next/link";
import PropTypes from "prop-types";

const EventCard = ({ group }) => {
  const { title, description, link, events } = group;

  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="p-6 flex flex-col flex-grow">
        <header className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </header>

        <section className="mb-6 flex-grow">
          <h3 className="font-semibold text-gray-700 mb-3">Upcoming Events:</h3>
          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 p-3 rounded-lg border-l-4 border-sky-950 hover:bg-gray-100 transition-colors duration-200"
              >
                <p className="font-medium text-gray-800">{event.name}</p>
                <time dateTime={event.date} className="text-sm text-gray-500">
                  {event.date}
                </time>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-sky-950 text-white rounded-lg hover:bg-sky-900 transition-colors duration-300 text-center w-full font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`Visit ${title} website`}
          >
            Visit Website
          </Link>
        </footer>
      </div>
    </article>
  );
};

EventCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const EventCards = () => {
  // Sample data (replace with your actual data)
  const groups = [
    {
      id: 1,
      title: "Code Masters",
      description: "Weekly coding challenges, hackathons, and mentorship for aspiring developers.",
      link: "https://example.com/code-masters",
      events: [
        { id: 1, name: "AI Workshop", date: "2024-08-05" },
        { id: 2, name: "Debugging Contest", date: "2024-08-12" },
      ],
    },
    {
      id: 2,
      title: "Tech Innovators",
      description: "Learn cutting-edge technologies like Next.js, Tailwind, and blockchain.",
      link: "https://example.com/tech-innovators",
      events: [
        { id: 1, name: "Next.js Workshop", date: "2024-08-08" },
        { id: 2, name: "Tailwind UI Contest", date: "2024-08-15" },
      ],
    },
    {
      id: 3,
      title: "Data Science Club",
      description: "Master Python, ML, and data visualization through real-world projects.",
      link: "https://example.com/data-science-club",
      events: [
        { id: 1, name: "Kaggle Competition", date: "2024-08-10" },
        { id: 2, name: "Python for Data Analysis", date: "2024-08-17" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Student Communities
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join our vibrant communities to learn, collaborate, and grow together.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <EventCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCards;