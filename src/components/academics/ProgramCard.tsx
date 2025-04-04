import Link from 'next/link'
import { Program } from '@/types/types'


interface ProgramCardProps {
  program: Program
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{program.title}</h2>
        <p className="text-gray-600 mb-1"><strong>Duration:</strong> {program.duration}</p>
        <p className="text-gray-600 mb-1"><strong>Degree:</strong> {program.degree}</p>
        <p className="text-gray-700 mb-4">{program.description}</p>
        <Link 
          href={program.link}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}