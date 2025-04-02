// app/companies/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type Company = {
  id: number;
  name: string;
  logo?: string;
};

const companies: Company[] = [
  {
    id: 1,
    name: "Google",
    logo: "/logos/google.png",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/logos/microsoft.png",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/logos/amazon.png",
  },
  {
    id: 4,
    name: "Infosys",
    logo: "/logos/infosys.png",
  },
  {
    id: 5,
    name: "TCS",
    logo: "/logos/tcs.png",
  },
  {
    id: 6,
    name: "Wipro",
    logo: "/logos/wipro.png",
  },
  {
    id: 7,
    name: "Accenture",
    logo: "/logos/accenture.png",
  },
  {
    id: 8,
    name: "IBM",
    logo: "/logos/ibm.png",
  },
];

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Recruiters</h1>
          <p className="mt-2 text-lg text-gray-600">
            Companies that visit our campus for placements
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search companies..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="text-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Showing {sortedCompanies.length} companies
          </div>
        </div>

        {sortedCompanies.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-4">No companies found</div>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSortOrder("asc");
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={80}
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="text-gray-400 text-xs text-center">
                      No logo
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}