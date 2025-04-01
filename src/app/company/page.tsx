// app/companies/page.tsx
"use client";

import { useState } from "react";
import { companies } from "@/data/companys";
import { Company } from "@/types/company";

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Recruiters</h1>
          <p className="mt-2 text-lg text-gray-600">
            Companies that visit our campus for placements
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Showing {sortedCompanies.length} companies
          </div>
          <select
            className="text-sm px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          {sortedCompanies.length === 0 ? (
            <div className="px-6 py-4 text-center text-gray-500">
              No companies found
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {sortedCompanies.map((company) => (
                <li key={company.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-gray-900">
                      {company.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}