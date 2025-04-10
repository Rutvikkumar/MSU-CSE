"use client"

import { useState } from 'react'
import HostelInfo from './HostelInfo'
import LibraryInfo from './LibraryInfo'



const FacilityTabs = () => {
  const [activeTab, setActiveTab] = useState('hostel')

  const tabs = [
    { id: 'hostel', label: 'Hostel Facilities' },
    { id: 'library', label: 'Library' },
    
    

    
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hostel':
        return <HostelInfo />
      case 'seminarhall':
        return <SeminarHall />
      case 'library':
        return <LibraryInfo />
      case 'auditorium':
        return <AuditoriumInfo />
      case 'smartclasses':
        return <SmartClassesInfo />
      case 'sports':
        return <SportsInfo />
      case 'cafeteria':
        return <CafeteriaInfo />
      default:
        return <HostelInfo />
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-0 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Vertical tabs on left side */}
      <div className="w-full md:w-64 flex md:flex-col border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-4 font-medium text-left focus:outline-none transition-colors duration-200 ${
              activeTab === tab.id
                ? 'md:border-r-4 border-blue-500 text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content area */}
      <div className="flex-1 p-6 min-h-[500px]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
            {tabs.find(tab => tab.id === activeTab)?.label}
          </h2>
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

export default FacilityTabs