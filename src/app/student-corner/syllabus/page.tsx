import Link from "next/link";

const Home = () => {
  const streams = [
    { name: "BE", path: "/student-corner/syllabus/be", desc: "Bachelor of Engineering" },
    { name: "MCA", path: "/student-corner/syllabus/mca", desc: "Master of Computer Applications" },
    { name: "PhD", path: "/student-corner/syllabus/phd", desc: "Doctor of Philosophy" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-800">
        Syllabus Archive
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {streams.map((stream) => (
          <Link
            key={stream.name}
            href={stream.path}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <h2 className="text-xl font-semibold text-blue-700">
              {stream.name}
            </h2>
            <p className="text-gray-600 mt-2">{stream.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;