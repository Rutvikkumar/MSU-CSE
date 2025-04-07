import FacilityTabs from '../../../components/facilities/department/FacilityTabs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">My College</h1>
          <p className="mt-2">Computer Department Facilities</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <FacilityTabs />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} My College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}