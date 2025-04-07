const LabInfo = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Computer Lab Facilities</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Main Computer Lab</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>50 high-end computers with latest configurations</li>
              <li>24/7 internet access</li>
              <li>Licensed software for all courses</li>
              <li>Air-conditioned environment</li>
              <li>Professional grade workstations for special projects</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Specialized Labs</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Networking Lab with Cisco equipment</li>
              <li>AI & Machine Learning Lab</li>
              <li>Cybersecurity Lab</li>
              <li>Multimedia Lab with high-end graphics workstations</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default LabInfo