"use client";
import React from "react";
import Link from "next/link";
import {
  FaBook,
  FaUsers,
  FaFlask,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import News from "../components/EventsSection";

const backgroundData = [
  {
    url: "/techo-banner.png",
    title: "Welcome to Our College",
    body: "A premier institution dedicated to academic excellence and holistic development.",
  },
  {
    url: "/techo-banner.png",
    title: "Innovative Learning Environment",
    body: "State-of-the-art facilities and experienced faculty to nurture your potential.",
  },
  {
    url: "/techo-banner.png",
    title: "Shape Your Future",
    body: "Join us to embark on a journey of knowledge and success.",
  },
];

const facultyMembers = [
  {
    name: "Dr. Apurva Shah",
    designation: "Professor, Computer Science",
    expertise: "Operating System,Microprosessors",
    image: "staff/Apurva-M-Shah.jpg",
  },
  {
    name: "Dr. Hetal Bhavsar",
    designation: "Associate Professor, Computer Science",
    expertise: "Compiler Design",
    image: "staff/hetal-bravser.png",
  },
  {
    name: "Dr. Anjali Jivani",
    designation: "Associate Professor, Computer Science",
    expertise: "Database Management System",
    image: "staff/Anjali-G-jivani.jpg",
  },
  {
    name: "Dr Mamta Padole",
    designation: "Associate Professor,Computer Science",
    expertise: "Java, Distributed System",
    image: "staff/mamta-padole.jpg",
  },
];

export default function Main() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % backgroundData.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  const bgStyle = {
    backgroundImage: `url(${backgroundData[index].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <main>
        <section style={bgStyle} className="relative">
          <div className="p-8 rounded-lg max-w-2xl text-center mx-4">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              {backgroundData[index].title}
            </h1>
            <p className="text-sky-950 text-xl">{backgroundData[index].body}</p>
          </div>
        </section>

        <CollegeDescription />

        <CollegeStats />

        <FacultiesSection />

        <News />

        <ResearchSection />

        {/* <LatestNews /> */}
      </main>
    </>
  );
}
const CollegeDescription = () => (
  <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 inline-flex">
        About Our College
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div>
          <p className="text-gray-700 mb-4">
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
      
          <Link
            href="/about"
            className="inline-block bg-sky-950 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div>
          <img
            src="techo-home.png" // Random faculty image
            alt="Faculty"
            className="w-full  object-cover rounded-lg bg-center"
          />
        </div>

        {/* Right Side: Image Only */}
      </div>
    </div>
  </section>
);

const CollegeStats = () => {
  const stats = [
    {
      icon: <FaGraduationCap className="w-12 h-12 mb-4" />,
      number: "200+",
      label: "Students",
      color: "bg-orange-500",
    },
    {
      icon: <FaUsers className="w-12 h-12 mb-4" />,
      number: "15+",
      label: "Faculty Members",
      color: "bg-teal-500",
    },
    {
      icon: <FaFlask className="w-12 h-12 mb-4" />,
      number: "6+",
      label: "Research Labs",
      color: "bg-purple-500",
    },
    {
      icon: <FaBook className="w-12 h-12 mb-4" />,
      number: "30+",
      label: "Research Papers",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Department at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 text-white`}
            >
              <div className="text-white">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FacultiesSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Our Esteemed Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {faculty.name}
              </h3>
              <p className="text-gray-600 mb-2">{faculty.designation}</p>
              <p className="text-sm text-gray-700">{faculty.expertise}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/staff"
            className="bg-sky-950 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors inline-flex items-center"
          >
            <FaChalkboardTeacher className="mr-2" />
            View All Staff
          </Link>
        </div>
      </div>
    </section>
  );
};

// Latest News Section
const LatestNews = () => {
  const newsItems = [
    {
      title: "New Engineering Program Launched",
      date: "2023-10-15",
      excerpt:
        "We're excited to announce our new AI and Robotics engineering program.",
    },
    {
      title: "College Fest 2023",
      date: "2023-11-01",
      excerpt:
        "Join us for our annual cultural fest with exciting events and competitions.",
    },
    {
      title: "Research Grant Awarded",
      date: "2023-09-20",
      excerpt:
        "Our faculty received a $1M grant for renewable energy research.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(item.date).toDateString()}
              </p>
              <p className="text-gray-700">{item.excerpt}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NavLink Component
const NavLink = ({ href, icon, text }) => (
  <li>
    <Link
      href={href}
      className="flex items-center text-xl py-3 px-4 hover:bg-blue-600 hover:text-white transition-all rounded text-gray-700"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

const ResearchSection = () => {
  const researchHighlights = [
    {
      title: "AI and Machine Learning",
      description:
        "Our researchers are working on cutting-edge AI technologies to solve real-world problems.",
      image: "https://picsum.photos/id/1060/400/300",
    },
    {
      title: "Renewable Energy",
      description:
        "We are developing sustainable energy solutions to combat climate change.",
      image: "https://picsum.photos/id/107/400/300",
    },
    {
      title: "Biotechnology",
      description:
        "Our biotech research focuses on advancements in healthcare and agriculture.",
      image: "https://picsum.photos/id/1036/400/300",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-2 border-b-4 border-blue-600 inline-block">
          Research at Our College
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchHighlights.map((research, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={research.image}
                alt={research.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {research.title}
              </h3>
              <p className="text-gray-700">{research.description}</p>
              <button className="mt-4 bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
