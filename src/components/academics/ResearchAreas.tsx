import { phdProgram } from '@/data/academics'

export default function ResearchAreas() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Research Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phdProgram.supervisors.areas.map((area, index) => (
          <div key={index} className="border p-4 rounded-lg hover:bg-white transition-colors">
            <h3 className="font-medium">{area}</h3>
            <p className="text-sm text-gray-600 mt-1">
              Active research projects in this area
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}