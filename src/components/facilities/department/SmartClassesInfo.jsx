const SmartClassesInfo = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Class Facilities</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Smart Classroom Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Interactive whiteboards in all classrooms</li>
              <li>High-definition projectors</li>
              <li>Audio-visual teaching aids</li>
              <li>Digital podium for instructors</li>
              <li>Student response systems</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Technology Integration</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Learning Management System (LMS) integration</li>
              <li>Cloud-based content delivery</li>
              <li>Virtual classroom capabilities</li>
              <li>Digital library access</li>
              <li>Online assessment tools</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default SmartClassesInfo