"use client";

import { useState } from "react";
import ProfileCard from "../../components/ui/ProfileCard";
import Link from "next/link";

export default function Staff() {
  const [activeTab, setActiveTab] = useState("teaching");

  const tabs = [
    { id: "teaching", label: "Teaching" },
    { id: "non-teaching", label: "Non-Teaching" },
    { id: "administrative", label: "Administrative" },
    { id: "office-staff", label: "Office Staff" },
  ];

  const getTabContent = () => {
    const teaching = [
      {
        id: 1,
        name: "Bessie Cooper",
        department: "Mentor",
        imageUrl: "/staff/Dilipsinh_M_Zala.jpg",
        profession: "Professor",
        nameColor: "default" as const,
      },
      {
        id: 2,
        name: "Arlene McCoy",
        department: "Senior Mentor",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor",
        nameColor: "teal" as const,
      },
      {
        id: 3,
        name: "Brooklyn Simmons",
        department: "Assistant Teacher",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor",
        nameColor: "default" as const,
      },
      {
        id: 4,
        name: "Brooklyn Simmons",
        department: "Assistant Teacher",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor",
        nameColor: "default" as const,
      },
      {
        id: 5,
        name: "Brooklyn Simmons",
        department: "Assistant Teacher",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor",
        nameColor: "default" as const,
      },
      {
        id: 6,
        name: "Brooklyn Simmons",
        department: "Assistant Teacher",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor",
        nameColor: "default" as const,
      },
    ];

    const nonTeaching = [
      {
        id: 1,
        name: "Bessie Cooper",
        department: "Mentor",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor", // Replace with your actual image paths
        nameColor: "default" as const,
      },
      {
        id: 2,
        name: "Arlene McCoy",
        department: "Senior Mentor",
        imageUrl: "/staff/profile.jpg",
        profession: "Professor",
        nameColor: "teal" as const,
      },
    ];
    switch (activeTab) {
      case "teaching":
        return (
          <>
            <div className="container mx-auto py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {teaching.map((profile) => (
                  <div key={profile.id} className="flex justify-center w-full">
                    <ProfileCard
                      name={profile.name}
                      department={profile.department}
                      imageUrl={profile.imageUrl}
                      profession={profile.profession}
                      linkto=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case "non-teaching":
        return (
          <>
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {teaching.map((profile) => (
                  <div key={profile.id} className="flex justify-center w-full">
                    <ProfileCard
                      name={profile.name}
                      department={profile.department}
                      imageUrl={profile.imageUrl}
                      profession={profile.profession}
                      linkto=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case "administrative":
        return <div className="min-h-96">Administrative Staff Content</div>;
      case "office-staff":
        return <div>Office Staff Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Staff</h1>
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{getTabContent()}</div>
    </div>
  );
}
