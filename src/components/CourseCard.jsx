import Link from 'next/link';
import React from 'react';

const CourseCard = ({ title, level, duration, icon, color, link }) => {


  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      onClick={handleClick}
      className={`group bg-white rounded-2xl shadow-md overflow-hidden border-t-4 ${color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-4 transition-transform duration-300 group-hover:scale-110">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{title}</h3>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{level}</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

const HomePageCourses = () => {
  const courses = [
    {
      title: 'B.E.',
      level: 'Undergraduate',
      duration: '4 Years',
      icon: '🎓',
      color: 'border-blue-500',
      link: '/courses',
    },
    {
      title: 'MCA',
      level: 'Postgraduate',
      duration: '2 Years',
      icon: '💻',
      color: 'border-green-500',
      link: '/courses',
    },
    {
      title: 'PhD',
      level: 'Doctorate',
      duration: '3-5 Years',
      icon: '🔬',
      color: 'border-purple-500',
      link: '/courses',
    },
  ];

  return (
    <section className="py-12  bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🎯 Popular Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            🚀 Explore All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageCourses;
