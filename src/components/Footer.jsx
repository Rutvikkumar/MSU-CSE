import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="bg-sky-950 text-white">
      <div className="max-w-6xl mx-auto py-10 px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={"/footer-logo.png"}
              alt="msu_logo"
              width={250}
              height={250}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Head Office Address</h3>
            <address className="not-italic space-y-1">
              <p>The M. S. University of Baroda,</p>
              <p>Pratapgunj,</p>
              <p>Vadodara, Gujarat-390002</p>
              <p className="mt-4">+91-285-2795555</p>
              <p>info@msubaroda.ac.in</p>
              <p>www.msubaroda.ac.in</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/TheMSUBaroda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/themsubaroda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/themsubaroda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <FaLinkedin className="text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://www.youtube.com/c/TheMSUBaroda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-2xl hover:text-blue-400" />
                </a>
              </div>

            </address>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-blue-300">Admission</Link></li>
              <li><Link href="#" className="hover:text-blue-300">Examination</Link></li>
              <li><Link href="#" className="hover:text-blue-300">MSUB Digital</Link></li>
              <li><Link href="#" className="hover:text-blue-300">MSUB in News</Link></li>
              <li><Link href="#" className="hover:text-blue-300">MSUB Connect</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-4">Head Office Working Hours</h3>
            <div className="space-y-1">
              <p><span className="font-semibold">Day:</span> Monday to Saturday</p>
              <p><span className="font-semibold">Time:</span> 10:30 am to 06:10 pm</p>
              <p><span className="font-semibold">Closed on:</span> 2nd and 4th Saturday, Sunday,<br />Government Approved Holidays</p>
            </div>
          </div>
        </div>


        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-300">
          &copy; {new Date().getFullYear()} The M. S. University of Baroda. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


export default Footer;
