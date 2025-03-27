import React from 'react'
import { Mail, Phone } from "lucide-react";

function page() {

    const contacts = [
        {
          name: "Prof. (Dr.) Apurva M. Shah",
          designation: "Head of Department",
          address: ".,-",
          phone: "0265-2434188 Ext 202",
          email: "head-cse@msubaroda.ac.in",
        },
      
      ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-8">Our Faculty</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {contacts.map((contact, index) => (
                        <div key={index} className="max-w-sm bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
                            <h2 className="text-lg font-bold text-blue-600">{contact.name}</h2>
                            <p className="font-semibold mt-2">Designation: <span className="font-normal">{contact.designation}</span></p>
                            <p className="font-semibold mt-1">Address: <span className="font-normal">{contact.address}</span></p>
                            <div className="mt-4 flex flex-col gap-2">
                                <p className="flex items-center gap-2 text-gray-700">
                                    <Phone size={18} /> {contact.phone}
                                </p>
                                <p className="flex items-center gap-2 text-gray-700">
                                    <Mail size={18} /> <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                                        {contact.email}
                                    </a>
                                </p>
                            </div>
                            <div className="mt-4 border-t border-blue-600"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page