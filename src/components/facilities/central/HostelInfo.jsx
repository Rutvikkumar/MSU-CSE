const HostelInfo = () => {
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Boys Hostel</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity: 200 students</li>
              <li>24/7 Wi-Fi connectivity</li>
              <li>Spacious AC rooms with attached bathrooms</li>
              <li>Common study rooms with LED lighting</li>
              <li>24-hour security with CCTV surveillance</li>
              <li>Laundry facilities available</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Girls Hostel</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity: 150 students</li>
              <li>High-speed internet access</li>
              <li>Furnished rooms with modern amenities</li>
              <li>Common recreation area with TV</li>
              <li>24-hour security with female wardens</li>
              <li>Indoor games facility</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Common Facilities</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Modern dining hall with hygienic food</li>
            <li>RO water purification system</li>
            <li>Power backup with generators</li>
            <li>Medical room with first-aid facilities</li>
            <li>Visitor's lounge for guests</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default HostelInfo