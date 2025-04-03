// app/Facilities/page.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import DepartmentContent from './department-facilities/page';
import CentralContent from './centeral-facilities/page';

export default function FacilitiesTabs() {
  const pathname = usePathname();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Facilities</h1>
      
      {/* Centered Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex border-b">
          <Link
            href="/facilities/department-facilities"
            className={`px-6 py-3 font-medium ${
              pathname.includes('department') 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500'
            }`}
          >
            Department Facilities
          </Link>
          <Link
            href="/Facilities/Centeral-Facilities"
            className={`px-6 py-3 font-medium ${
              pathname.includes('Centeral') 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500'
            }`}
          >
            Central Facilities
          </Link>
        </div>
      </div>

      {/* Dynamic Content Below Tabs */}
      <div className="max-w-4xl mx-auto">
        {pathname.includes('department') && (
          <Suspense fallback={<div>Loading department...</div>}>
            <DepartmentContent />
          </Suspense>
        )}
        {pathname.includes('Centeral') && (
          <Suspense fallback={<div>Loading central...</div>}>
            <CentralContent />
          </Suspense>
        )}
      </div>
    </div>
  );
}