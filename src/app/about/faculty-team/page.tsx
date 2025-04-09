"use client";

import { useState } from "react";
import ProfileCard from "@/components/ui/ProfileCard";
import EventsSection from "@/components/EventsSection";

export default function Staff() {
  const [activeTab, setActiveTab] = useState("teaching");

  const tabs = [
    { id: "teaching", label: "Teaching" },
    // { id: "non-teaching", label: "Non-Teaching" },
    // { id: "administrative", label: "Administrative" },
    // { id: "office-staff", label: "Office Staff" },
  ];

  const getTabContent = () => {
    const teaching = [
      {
        id: 1,
        name: "Prof. (Dr.) Apurva M. Shah",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/Apurva-M-Shah.jpg",
        profession: "Professor",
        link: "/hello",
      },
      {
        id: 2,
        name: "Prof. (Dr.) Kamlesh Vaishnav",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/Kamlesh-Vaishnav.jpg",
        profession: "Professor",
      },
      {
        id: 3,
        name: "Dr. Anjali G. Jivani",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/Anjali-G-Jivani.jpg",
        profession: "Associate Professor",
      },
      {
        id: 4,
        name: "Dr. Mamta C. Padole",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/mamta-padole.jpg",
        profession: "Associate Professor",
      },
      {
        id: 5,
        name: "Dr. Viral V. Kapadia",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/Viral_Kapadia.png",
        profession: "Associate Professor",
      },
      {
        id: 6,
        name: "Mr. Jal Shah",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/Jal-Shah.jpeg",
        profession: "Temporary Assistant Professor",
      },
      {
        id: 7,
        name: "Mrs. Meghna Tarun Desai",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/Meghna_Tarun_Desai.jpg",
        profession: "Temporary Assistant Professor",
      },
      {
        id: 8,
        name: "Ms. Chaitali Bhoi",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/ChaitaliMam.jpeg",
        profession: "Temporary Assistant Professor",
      },
      {
        id: 9,
        name: "Ms. Smita Mahajani",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/smita_mam.jpeg",
        profession: "Temporary Assistant Professor",
      },
      {
        id: 10,
        name: "Ms. Vilas Sunny Machhi",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/vilas.jpg",
        profession: "Temporary Assistant Professor",
      },
      {
        id: 11,
        name: "Prerna R Kadia",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/PRERNA-KADIA.jpg",
        profession: "Temporary Assistant Professor",
      },
      {
        id: 12,
        name: "Snehal Patel",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/SnehalMam.jpeg",
        profession: "Temporary Assistant Professor",
      },

      {
        id: 14,
        name: "VMr. Sunny Kamra",
        department: "Department of Computer Science and Engineering",
        imageUrl: "/staff/SunnyKamra.jpg",
        profession: "Temporary Assistant Professor",
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {nonTeaching.map((profile) => (
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
        return (
          <div className="min-h-96">
            <>
              <div className="container mx-auto py-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {teaching.map((profile) => (
                    <div
                      key={profile.id}
                      className="flex justify-center w-full"
                    >
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
          </div>
        );
      case "office-staff":
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
