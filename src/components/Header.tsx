"use client"
import { JSX, useState } from "react";
import { FaHome, FaBook, FaNewspaper, FaUsers, FaEnvelope, FaInfoCircle } from "react-icons/fa";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  links: string[];
}

const menuItems: MenuItem[] = [
  { name: "Home", icon: <FaHome />, links: [] },
  { name: "Courses", icon: <FaBook />, links: ["Basic Computer", "Tally Prime", "Hacking"] },
  { name: "News", icon: <FaNewspaper />, links: ["Latest News", "Events"] },
  { name: "Staff", icon: <FaUsers />, links: ["Teacing", "Non-Teaching","Administrive Staff","Office Staff"]},
  { name: "Contact", icon: <FaEnvelope />, links: ["Email", "Phone", "WhatsApp"] },
  { name: "About", icon: <FaInfoCircle />, links: ["History", "Vision", "Mission"] },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="bg-sky-950 shadow-md relative z-30">
      <div className="max-w-6xl mx-auto py-3 px-8 flex items-center justify-between">
        <a href="#">
          <img className="w-16 h-16 hover:scale-105 transition-all" src="/msu_logo.png" alt="College Logo" />
        </a>
        <nav>
          <ul className="flex gap-3 z-20">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative px-4 py-2 text-white hover:text-blue-600 cursor-pointer"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href={item.name.toLowerCase()} className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </a>

                {/* Mega Menu */}
                {activeMenu === item.name && item.links.length > 0 && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md py-2"
                    onMouseEnter={() => setActiveMenu(item.name)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {item.links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
