"use client"

import DepartmentOverview from '@/components/about/DepartmentOverview'
import { departmentInfo } from '@/data/about'

export default function CSEDepartmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Computer Science & Engineering Department</h1>
      
      <DepartmentOverview data={departmentInfo} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="text-gray-700">
          Established in {departmentInfo.established}, the CSE Department at MSU Baroda 
          has grown from a small computer center to one of the premier computer science 
          departments in Western India. Our alumni hold leadership positions in major 
          tech companies worldwide.
        </p>
      </div>
    </div>
  )
}