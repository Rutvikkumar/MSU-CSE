const HostelInfo = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hostel Facilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Boys Hostel</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity: 200 students</li>
              <li>24/7 Wi-Fi connectivity</li>
              <li>Spacious rooms with attached bathrooms</li>
              <li>Common study rooms</li>
              <li>24-hour security</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Girls Hostel</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity: 150 students</li>
              <li>24/7 Wi-Fi connectivity</li>
              <li>Spacious rooms with attached bathrooms</li>
              <li>Common recreation area</li>
              <li>24-hour security with female wardens</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default HostelInfo