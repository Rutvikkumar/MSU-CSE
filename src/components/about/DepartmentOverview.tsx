interface DepartmentOverviewProps {
    data: {
      established: number
      location: string
      facilities: string[]
      achievements: string[]
    }
  }
  
  export default function DepartmentOverview({ data }: DepartmentOverviewProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Key Information</h2>
          <ul className="space-y-2">
            <li><strong>Established:</strong> {data.established}</li>
            <li><strong>Location:</strong> {data.location}</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-3">Facilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            {data.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-3">Achievements</h2>
          <ul className="list-disc pl-5 space-y-1">
            {data.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }