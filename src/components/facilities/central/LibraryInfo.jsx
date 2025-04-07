const LibraryInfo = () => {
    return (
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Central Library</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Over 50,000 books and references</li>
            <li>Digital library with 10,000+ e-books</li>
            <li>Reading halls with 300 seating capacity</li>
            <li>Open from 8:00 AM to 10:00 PM</li>
            <li>Online catalog and reservation system</li>
            <li>Access to international journals and publications</li>
          </ul>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Special Collections</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Rare books section</li>
              <li>Thesis and dissertation archive</li>
              <li>Competitive exam resources</li>
              <li>Newspaper and magazine section</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Digital Resources</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>24/7 remote access to e-resources</li>
              <li>Plagiarism checking software</li>
              <li>E-book readers available for checkout</li>
              <li>Online database subscriptions</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default LibraryInfo