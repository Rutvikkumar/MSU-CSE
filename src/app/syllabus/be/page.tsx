export default function BESyllabus() {
    const syllabus = {
      "Semester 1": ["Maths 1", "Physics", "Chemistry", "Engineering Drawing"],
      "Semester 2": ["Maths 2", "Programming", "Electronics", "Communication Skills"],
      "Semester 3": ["Data Structures", "DBMS", "Operating Systems", "Computer Networks"],
      "Semester 4": ["Algorithms", "Software Engineering", "Microprocessors", "Web Development"],
      "Semester 5": ["Artificial Intelligence", "Machine Learning", "Cyber Security"],
      "Semester 6": ["Cloud Computing", "Blockchain", "Internet of Things"],
    };
  
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">BE Syllabus</h2>
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
  