import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactCard: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border border-gray-300 p-8 rounded-lg shadow-md">
        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Details</h2>
          <hr className="w-20 border-b-2 border-teal-500 mb-5" />
          <p className="font-bold">Computer Science and Engineering</p>
          <p>.....</p>
          <p>.....</p>
          <p>.....</p>
          <p className="flex items-center mt-3">
            📞 <span className="ml-2">(+91) 6352135360</span>
          </p>
          <p className="flex items-center mt-2">
            ✉️ <span className="ml-2">principal.msu@cvmu.edu.in</span>
          </p>
          <p className="flex items-center mt-2">
            ⏰ <span className="ml-2">Monday to Saturday: 9:00 AM to 4:30 PM</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-gray-700 cursor-pointer text-2xl" />
            <FaInstagram className="text-gray-700 cursor-pointer text-2xl" />
            <FaTwitter className="text-gray-700 cursor-pointer text-2xl" />
            <FaYoutube className="text-gray-700 cursor-pointer text-2xl" />
          </div>
        </div>

        {/* Important Contacts */}
        <div>
          <h2 className="text-xl font-bold mb-3">Important Contacts</h2>
          <hr className="w-20 border-b-2 border-teal-500 mb-5" />
          <p>
            <strong>Education Verification/Transcript</strong>
            <br />
            studentsupport...email
          </p>
          <p className="mt-4">
            <strong>Admissions</strong>
            <br />
            Dr. Renil Thomas: 9898203575
            <br />
            renil.thomas@cvmu.edu.in
          </p>
          <p className="mt-4">
            <strong>Placement</strong>
            <br />
            renil.thomas@cvmu.edu.in
          </p>
          <p className="mt-4">
            <strong>Accommodation</strong>
            <br />
            Boys Hostel: chetanbhai.patel@cvmu.edu.in
            <br />
            Girls Hostel: khyati.patel@cvmu.edu.in
          </p>
          <p className="mt-4">
            <strong>SMTR (A UGC CARE Listed Journal)</strong>
            <br />
            publication.fcml@cvmu.edu.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
