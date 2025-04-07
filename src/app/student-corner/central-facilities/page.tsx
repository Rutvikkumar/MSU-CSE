import FacilityTabs from '../../../components/facilities/central/FacilityTabs'

export default function CentralFacilities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Central Facilities</h1>
        <p className="text-lg text-gray-600">
          Explore our world-class facilities designed to enhance your learning experience
        </p>
      </div>
      
      <FacilityTabs />
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>For more information about any facility, please contact the administration office</p>
      </div>
    </div>
  )
}