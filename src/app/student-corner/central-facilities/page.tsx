// components/HostelTabs.js
"use client"
import React, { useState } from 'react';

const HostelTabs = () => {
  const [activeTab, setActiveTab] = useState('naik');

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('naik')}
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'naik'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          AM Naik House
        </button>
        <button
          onClick={() => setActiveTab('bhaikaka')}
          className={`py-2 px-4 font-medium text-sm focus:outline-none ${
            activeTab === 'bhaikaka'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Bhaikaka Hostel
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'naik' && (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              AM Naik House of Scholars (Boys Hostel)
            </h1>
            
            <div className="flex items-start mb-2">
              <span className="text-gray-600 mr-2">•</span>
              <p className="text-gray-700">
                <span className="font-semibold">A of NAIK</span><br />
                HOUSE OF SCHOLARS
              </p>
            </div>
            
            <div className="flex items-start mb-2">
              <span className="text-gray-600 mr-2">•</span>
              <p className="text-gray-700">
                Well-ventilated Rooms with/without AC and attached washroom.
              </p>
            </div>
            
            <div className="ml-6 mt-4 space-y-2">
              <div className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <p className="text-gray-700">Information Technology Centre</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <p className="text-gray-700">Information Resource Centre</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 mr-2">•</span>
                <p className="text-gray-700">Human Resource Development Center</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bhaikaka' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Bhaikaka Boys Hostel
            </h2>
            
            <div className="flex items-start mb-2">
              <span className="text-gray-600 mr-2">•</span>
              <p className="text-gray-700">
                Close to SEMCOM and CVM University at distance of around 100 m.
              </p>
            </div>
            
            <div className="flex items-start">
              <span className="text-gray-600 mr-2">•</span>
              <p className="text-gray-700">
                Well-ventilated Rooms on twin-sharing basis.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelTabs;