export default function MCASyllabus() {
    const syllabus = {
      "Semester 1": ["Programming Basics", "Database Management", "Web Development"],
      "Semester 2": ["Operating Systems", "OOP with Java", "Software Engineering"],
      "Semester 3": ["Computer Networks", "Data Science", "Cloud Computing"],
      "Semester 4": ["AI & ML", "Blockchain", "Project Work"],
    };
  
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">MCA Syllabus</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(syllabus).map(([sem, subjects], index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">{sem}</h3>
              <ul className="list-disc list-inside">
                {subjects.map((subject, idx) => (
                  <li key={idx} className="text-gray-700">{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  