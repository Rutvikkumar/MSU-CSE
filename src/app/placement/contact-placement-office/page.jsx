// app/contact/page.tsx
"use client";

import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";

export default function PlacementContactPage() {
  const placementTeam = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Placement Director",
      email: "placement.director@college.edu",
      phone: "+91 9876543210"
    },
    {
      name: "Ms. Priya Sharma",
      role: "Placement Coordinator",
      email: "placement.coordinator@college.edu",
      phone: "+91 8765432109"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-sky-950 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Placement Cell Contact</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Connect with our placement team for recruitment and student opportunities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <MdSupportAgent className="mr-2 text-blue-600" />
              Placement Cell
            </h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 80 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center">
                <IoMdMail className="text-blue-600 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">placement@college.edu</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Placement Team</h2>
            
            <div className="space-y-6">
              {placementTeam.map((member, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaEnvelope className="mr-3 text-blue-600" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-3 text-blue-600" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600">
                      {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}