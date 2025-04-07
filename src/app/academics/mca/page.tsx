"use client"

import { mcaProgram } from '@/data/academics'
import ProgramDetails from '@/components/academics/ProgramDetails'

export default function MCAPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProgramDetails 
        program={mcaProgram}
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'curriculum', label: 'Curriculum' },
          { id: 'admissions', label: 'Admissions' },
          { id: 'careers', label: 'Career Prospects' },
        ]}
      />
    </div>
  )
}