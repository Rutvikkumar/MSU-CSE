import { programs } from '@/data/academics'
import ProgramCard from '@/components/academics/ProgramCard'

export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Academics</h1>
      
      <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          The Department of Computer Science & Engineering offers comprehensive 
          programs designed to provide students with strong theoretical foundations 
          and practical skills in computing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  )
}