'use client'

import { useState } from 'react'
import { ProgramDetails as ProgramDetailsType } from '@/types/types'

interface ProgramDetailsProps {
  program: ProgramDetailsType
  tabs: { id: string; label: string }[]
}

export default function ProgramDetails({ program, tabs }: ProgramDetailsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{program.title}</h1>
      
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="prose max-w-none">
        {activeTab === 'overview' && (
          <div>
            <h2>Program Overview</h2>
            <p>{program.overview}</p>
          </div>
        )}
        
        {activeTab === 'curriculum' && (
          <div>
            <h2>Curriculum Structure</h2>
            {/* Render curriculum data */}
          </div>
        )}
        
        {/* Other tab contents */}
      </div>
    </div>
  )
}