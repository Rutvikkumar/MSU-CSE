"use client"; // Add this if you're using client-side features
import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <>
      {/* Secondary Navbar */}
      {/* <header className="bg-blue-800 shadow-md">
        <nav className="max-w-6xl mx-auto py-4 px-8">
          <ul className="flex justify-center gap-8">
            <li>
              <Link
                href="/about"
                className="text-white hover:text-blue-300 transition-colors text-lg font-semibold"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/about/history"
                className="text-white hover:text-blue-300 transition-colors text-lg font-semibold"
              >
                Department History
              </Link>
            </li>
            <li>
              <Link
                href="/about/vision"
                className="text-white hover:text-blue-300 transition-colors text-lg font-semibold"
              >
                Mission and Vision
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}

      {/* Page Content */}
      <main className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
        {children}
      </main>
    </>
  );
}