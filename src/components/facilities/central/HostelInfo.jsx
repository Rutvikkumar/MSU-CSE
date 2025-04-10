"use client"

import Image from 'next/image'

const HostelInfo = () => {
  // Hostel data - you can replace with actual MSU hostel information
  const hostels = [
    {
      name: "University Hostel for Boys",
      description: "The boys' hostel provides comfortable accommodation with modern amenities. It has a capacity of 500 students with options for single, double, and triple occupancy rooms.",
      facilities: ["24/7 WiFi", "Reading Room", "Common TV Lounge", "Indoor Games", "Laundry Service", "Mess Facility"],
      image: "/hostel-boys.jpg" // Replace with actual image path
    },
    {
      name: "University Hostel for Girls",
      description: "The girls' hostel offers secure and well-maintained living spaces with round-the-clock security. It has a capacity of 400 students with various room configurations.",
      facilities: ["24/7 Security", "Study Rooms", "Dining Hall", "Gymnasium", "Visitor Lounge", "Medical Room"],
      image: "/hostel-girls.jpg" // Replace with actual image path
    },
    {
      name: "International Students Hostel",
      description: "Specially designed for international students, this hostel provides a multicultural living environment with additional support services.",
      facilities: ["Air-conditioned Rooms", "Kitchenette", "Cultural Exchange Programs", "Language Support", "Travel Desk", "24/7 Support Staff"],
      image: "/hostel-international.jpg" // Replace with actual image path
    }
  ];

  const rules = [
    "Hostel admission is strictly based on merit and availability",
    "Students must maintain discipline and decorum in the hostel premises",
    "Visitors are allowed only during specified hours and with prior permission",
    "Use of electrical appliances in rooms is restricted",
    "Ragging is strictly prohibited and punishable by law",
    "Hostel fees must be paid by the due date to avoid penalty"
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Overview</h3>
        <p className="text-gray-700">
          MSU provides excellent hostel facilities for both male and female students. Our hostels are designed to 
          provide a comfortable living environment that complements academic pursuits. With modern amenities, 
          security, and a vibrant community life, our hostels become a home away from home for students.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {hostels.map((hostel, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 relative bg-gray-100">
              {hostel.image && (
                <Image 
                  src={hostel.image}
                  alt={hostel.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{hostel.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{hostel.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Facilities:</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                  {hostel.facilities.map((facility, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {facility}
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
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Hostel Fees Structure</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hostel Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Fee</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caution Deposit</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">General Boys Hostel</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">₹15,000</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">₹5,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">General Girls Hostel</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">₹18,000</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">₹5,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">International Hostel</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">₹25,000</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">₹10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">* Mess charges are additional and may vary based on meal plans</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Hostel Rules & Regulations</h3>
          <ul className="space-y-2">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-semibold text-yellow-800 mb-3">Hostel Admission Process</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Submit the hostel application form along with the admission form</li>
          <li>Allotment is done based on merit and availability</li>
          <li>Selected candidates will receive an allotment letter</li>
          <li>Pay the hostel fees within the stipulated time</li>
          <li>Complete the hostel check-in formalities with required documents</li>
        </ol>
        <div className="mt-4 p-4 bg-white rounded border border-yellow-100">
          <p className="text-sm text-yellow-700">
            <strong>Note:</strong> Hostel accommodation is limited and preference is given to outstation students. 
            Students are advised to apply early to secure a seat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelInfo;