const AuditoriumInfo = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Auditorium Facilities</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Main Auditorium</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity: 500 seats</li>
              <li>State-of-the-art sound system</li>
              <li>High-definition projection system</li>
              <li>Fully air-conditioned</li>
              <li>Green rooms for performers</li>
              <li>Wi-Fi enabled for live streaming</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Mini Auditorium</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity: 150 seats</li>
              <li>Ideal for seminars and workshops</li>
              <li>Interactive whiteboard</li>
              <li>Video conferencing facilities</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default AuditoriumInfo