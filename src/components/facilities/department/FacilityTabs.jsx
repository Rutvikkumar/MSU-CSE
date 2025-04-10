"use client"

import { useState } from 'react'
import HostelInfo from './HostelInfo'
import LabInfo from './LabInfo'
import AuditoriumInfo from './AuditoriumInfo'
import SmartClassesInfo from './SmartClassesInfo'
import SeminarHall from './SeminarHall'

const FacilityTabs = () => {
  const [activeTab, setActiveTab] = useState('hostel')

  const tabs = [
    { id: 'hostel', label: 'Hostel' },
    { id: 'lab', label: 'Computer Lab' },
    { id: 'auditorium', label: 'Auditorium' },
    { id: 'smartclasses', label: 'Smart Classes' },
    { id: 'seminarhall', label: 'SeminarHall' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hostel':
        return <HostelInfo />
      case 'lab':
        return <LabInfo />
      case 'auditorium':
        return <AuditoriumInfo />
      case 'smartclasses':
        return <SmartClassesInfo />
        case 'seminarhall':
        return <SeminarHall />
      default:
        return <HostelInfo />
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Vertical tabs on left side */}
      <div className="w-full md:w-48 flex md:flex-col border-b md:border-b-0 md:border-r border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 font-medium text-sm text-left focus:outline-none ${
              activeTab === tab.id
                ? 'md:border-r-2 md:border-l-0 border-b-2 md:border-b-0 border-blue-500 text-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content area */}
      <div className="flex-1 p-6">{renderTabContent()}</div>
    </div>
  )
}

export default FacilityTabs