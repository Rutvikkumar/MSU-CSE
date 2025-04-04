"use client"

import { phdProgram } from '@/data/academics'
import ProgramDetails from '@/components/academics/ProgramDetails'
import ResearchAreas from '@/components/academics/ResearchAreas'

export default function PhDPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProgramDetails 
        program={phdProgram}
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'admissions', label: 'Admissions' },
          { id: 'supervisors', label: 'Research Supervisors' },
          { id: 'scholars', label: 'Current Scholars' },
        ]}
      />
      
      <div className="mt-12">
        <ResearchAreas />
      </div>
    </div>
  )
}