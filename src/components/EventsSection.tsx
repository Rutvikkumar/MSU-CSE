import Link from "next/link";

const events = [
  {
    id: 1,
    date: "25 May, 2025",
    title: "Coding Challenge Championship",
    time: "05:30 am to 8:25 pm",
    location: "Jeddah",
  },
  {
    id: 2,
    date: "45 April, 2025",
    title: "Electrical Engineering new event",
    time: "05:30 am to 8:25 pm",
    location: "Jeddah",
  },
  {
    id: 3,
    date: "27 June, 2025",
    title: "World Famous Talented Teachers",
    time: "05:30 am to 8:25 pm",
    location: "Jeddah",
  },
];

const latestNews = [
  {
    id: 1,
    title: "New Technology Advancements in Education",
    link: "#",
  },
  {
    id: 2,
    title: "Upcoming College Festivals Announced",
    link: "#",
  },
  {
    id: 3,
    title: "Student Achievements in Global Competitions",
    link: "#",
  },
];

const EventsSection = () => {
  return (
    <div className="container mx-auto py-8 flex flex-wrap justify-between gap-8">
      {/* Left Section: Upcoming Events */}
      <div className="w-full lg:w-[48%] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Join our Upcoming Events</h2>
          <div
            onClick={() => window.location.href = "/events"}
            className="text-teal-600 hover:underline cursor-pointer"
          >
            See All Events &rarr;
          </div>
        </div>
        <div className="flex flex-col space-y-4 overflow-y-auto max-h-[400px]">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex justify-center items-center mr-4">
                  <span className="text-xl">{event.date.split(" ")[0]}</span>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{event.date}</p>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.time}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                  <div className="text-teal-600 hover:underline mt-3 cursor-pointer">
                    Join Now &rarr;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Latest News */}
      <div className="w-full lg:w-[48%] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <div
            onClick={() => window.location.href = "/news"}
            className="text-teal-600 hover:underline cursor-pointer"
          >
            See All News &rarr;
          </div>
        </div>
        <div className="flex flex-col space-y-4 overflow-y-auto max-h-[400px]">
          {latestNews.map((news) => (
            <div key={news.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{news.title}</h3>
              <div
                onClick={() => window.location.href = news.link}
                className="text-teal-600 hover:underline cursor-pointer"
              >
                Read More &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
