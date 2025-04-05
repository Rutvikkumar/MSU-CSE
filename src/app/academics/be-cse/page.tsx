import { beProgram } from '@/data/academics'
import ProgramDetails from '@/components/academics/ProgramDetails'

export default function BECSEPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProgramDetails 
        program={beProgram}
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'curriculum', label: 'Curriculum' },
          { id: 'admissions', label: 'Admissions' },
          { id: 'syllabus', label: 'Syllabus' },
        ]}
      />
    </div>
  )
}