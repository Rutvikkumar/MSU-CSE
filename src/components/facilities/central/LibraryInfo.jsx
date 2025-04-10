"use client"

import Image from 'next/image'

const LibraryInfo = () => {
  // Library data for Faculty of Technology & Engineering
  const librarySections = [
    {
      name: "Central Reading Hall",
      description: "Spacious reading area with natural lighting, accommodating 200 students simultaneously with individual study carrels.",
      capacity: "200 seats",
      timing: "8:00 AM - 10:00 PM (Mon-Sat)",
      image: "/library-reading-hall.jpg",
      features: [
        "WiFi enabled",
        "Power outlets at each seat",
        "Silent study zone",
        "Reference collection access"
      ]
    },
    {
      name: "Technical Journals Section",
      description: "Comprehensive collection of national and international journals covering all engineering disciplines.",
      capacity: "50 reading spaces",
      timing: "9:00 AM - 7:00 PM",
      image: "/library-journals.jpg",
      features: [
        "500+ current subscriptions",
        "Digital journal access",
        "Print archives since 1960",
        "Librarian assistance"
      ]
    },
    {
      name: "Digital Resource Center",
      description: "State-of-the-art computer lab with access to engineering databases, e-books, and online resources.",
      capacity: "40 computer stations",
      timing: "8:30 AM - 9:30 PM",
      image: "/library-digital.jpg",
      features: [
        "High-speed internet",
        "Access to IEEE Xplore",
        "SciHub portal",
        "Print/scan facilities"
      ]
    }
  ];

  const collections = [
    { category: "Textbooks", count: "25,000+ volumes" },
    { category: "Reference Books", count: "5,000+ volumes" },
    { category: "Technical Reports", count: "3,200+ reports" },
    { category: "Theses/Dissertations", count: "4,500+ works" },
    { category: "E-books", count: "15,000+ titles" },
    { category: "CD-ROM/DVDs", count: "2,000+ items" }
  ];

  const digitalResources = [
    { name: "IEEE Xplore", access: "Full-text" },
    { name: "ScienceDirect", access: "Full-text" },
    { name: "ASCE Library", access: "Full-text" },
    { name: "SpringerLink", access: "Full-text" },
    { name: "McGraw-Hill Access", access: "Selected titles" },
    { name: "NPTEL Videos", access: "Full access" }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Faculty of Technology & Engineering Library</h3>
        <p className="text-gray-700">
          The FTE Library serves as the academic hub for engineering students and faculty, offering extensive resources 
          covering all major engineering disciplines. Established in 1949, our library has grown to become one of the 
          premier technical libraries in western India, supporting the teaching, learning and research needs of the faculty.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {librarySections.map((section, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 relative bg-gray-100">
              {section.image && (
                <Image 
                  src={section.image}
                  alt={section.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{section.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{section.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <p className="font-medium text-gray-700">Capacity:</p>
                  <p className="text-gray-600">{section.capacity}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Timing:</p>
                  <p className="text-gray-600">{section.timing}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Features:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 mr-1 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Library Collections</h3>
          <div className="grid grid-cols-2 gap-4">
            {collections.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                <p className="font-medium text-gray-700">{item.category}</p>
                <p className="text-blue-600 font-semibold">{item.count}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100">
            <p className="text-sm text-blue-700">
              <strong>Special Collections:</strong> Rare books collection (500+ volumes), Patent documents, 
              ISI/ISO standards, and Historical technical manuals.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Resources</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {digitalResources.map((resource, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{resource.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{resource.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded border border-green-100">
            <p className="text-sm text-green-700">
              <strong>Remote Access:</strong> All digital resources are accessible from hostel rooms and campus WiFi. 
              Off-campus access requires VPN login.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">Library Services</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border border-yellow-100 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">Circulation Services</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Book lending (15 day period)</li>
              <li>• Renewals (online/offline)</li>
              <li>• Book reservation system</li>
              <li>• Inter-library loan</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-yellow-100 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">Reference Services</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Research assistance</li>
              <li>• Literature search</li>
              <li>• Citation help</li>
              <li>• Plagiarism checking</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-yellow-100 shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">Other Services</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Document scanning</li>
              <li>• Thesis binding</li>
              <li>• Book recommendation</li>
              <li>• New arrival alerts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">Library Rules & Regulations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">General Rules:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>ID card mandatory for entry</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Silence must be maintained</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>No food or drinks allowed</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Borrowing Privileges:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Students: 4 books for 15 days</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Faculty: 10 books for 30 days</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>₹5/day fine for overdue books</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryInfo;