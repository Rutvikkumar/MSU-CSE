"use client"
// import { Item } from "@/constants/index";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { IoBagOutline, IoSearch } from "react-icons/io5";
// import MegaMenu from "./MegaMenu";

// const Navbar = () => {
//     return (
//         <>
//             <div className="flex justify-between items-center px-10 py-2 bg-sky-950 border-b-2 sticky top-0 left-0 right-0 z-50">
//                 <div>
//                     <Image
//                         src={"/logo_msu.png"}
//                         alt="Nike Logo"
//                         width={80}
//                         height={80}
//                     />
//                 </div>
//                 <div className="flex gap-6 pr-6 text-white z-20">
//                     {Item.map((item) => (
//                         <div key={item.category} className="group">
//                             <Link
//                                 href={item.href}
//                                 className="text-lg font-semibold py-1 hover:border-b-[3px] border-white"
//                             >
//                                 <span className="flex items-center gap-1">
//                                     {item.icon}
//                                     {item.category}
//                                     {item.product && <MegaMenu product={item.product} />}
//                                 </span>   
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Navbar;

import { Item } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-10 py-2 bg-sky-950 border-b-2 sticky top-0 left-0 right-0 z-50">
            {/* Logo */}
            <div>
                <Image
                    src={"/logo_msu.png"}
                    alt="MSU Logo"
                    width={80}
                    height={80}
                />
            </div>

            {/* Navigation Links */}
            <div className="flex gap-3 text-white z-20">
                {Item.map((item) => (
                    <div key={item.category} className="group relative">
                        <Link
                            href={item.href}
                            className="text-lg font-semibold py-1 hover:border-b-[3px] border-white flex items-center gap-1"
                        >

                            {item.category}
                        </Link>
                        {/* Mega Menu for Products */}
                        {item.product && (
                            <MegaMenu product={item.product} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;



// import { Item } from "@/constants/index";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import MegaMenu from "./MegaMenu";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

//     const toggleMenu = () => {
//         setIsOpen(!isOpen); // Toggle menu on click
//     };

//     return (
//         <div className="flex justify-between items-center px-10 py-2 bg-sky-950 border-b-2 sticky top-0 left-0 right-0 z-50">
//             {/* Logo */}
//             <div>
//                 <Image
//                     src={"/logo_msu.png"}
//                     alt="MSU Logo"
//                     width={80}
//                     height={80}
//                 />
//             </div>

//             {/* Desktop Navigation Links (Visible only on larger screens) */}
//             <div className="hidden 2xl:flex gap-6 pr-6 text-white z-20">
//                 {Item.map((item) => (
//                     <div key={item.category} className="group relative">
//                         <Link
//                             href={item.href}
//                             className="text-lg font-semibold py-1 hover:border-b-[3px] border-white flex items-center gap-1"
//                         >
//                             {item.icon}
//                             {item.category}
//                         </Link>
//                         {/* Mega Menu for Products */}
//                         {item.product && <MegaMenu product={item.product} />}
//                     </div>
//                 ))}
//             </div>

//             {/* Mobile Hamburger Icon (Visible on `lg` screens and below) */}
//             <div className="xl:flex 2xl:hidden items-center z-20">
//                 <button
//                     onClick={toggleMenu}
//                     className="text-white text-2xl"
//                 >
//                     {isOpen ? "X" : "☰"}
//                 </button>
//             </div>

//             {/* Mobile Navigation Links (Visible only on smaller screens and when menu is open) */}
//             <div
//                 className={`2xl:hidden absolute top-0 left-0 right-0 bg-sky-950 text-white flex flex-col items-center space-y-4 py-6 px-10 transform transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//             >
//                 {Item.map((item) => (
//                     <div key={item.category} className="group relative w-full">
//                         <Link
//                             href={item.href}
//                             className="text-lg font-semibold py-1 hover:border-b-[3px] border-white flex items-center gap-1"
//                             onClick={() => setIsOpen(false)} // Close menu after clicking
//                         >
//                             {item.icon}
//                             {item.category}
//                         </Link>
//                         {/* Mega Menu for Products */}
//                         {item.product && (
//                             <MegaMenu product={item.product} />
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Navbar;








// import { Item } from "@/constants/index";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import MegaMenu from "./MegaMenu";
// import DropdownMenu from "./DropdownMenu";

// const Navbar = () => {
//     return (
//         <>
//             <div className="flex justify-between items-center px-10 py-2 bg-sky-950 border-b-2 sticky top-0 left-0 right-0 z-50">
//                 <div>
//                     <Image
//                         src={"/logo_msu.png"}
//                         alt="Logo"
//                         width={80}
//                         height={80}
//                     />
//                 </div>
//                 <div className="flex gap-6 pr-6 text-white z-20">
//                     {Item.map((item) => (
//                         <div key={item.category} className="group relative">
//                             <Link
//                                 href={item.href}
//                                 className="text-lg font-semibold py-1 hover:border-b-[3px] border-white"
//                             >
//                                 <span className="flex items-center gap-1">
//                                     {item.icon}
//                                     {item.category}
//                                 </span>   
//                             </Link>
//                             {item.product && item.category === "Academics" ? (
//                                 <DropdownMenu product={item.product} />
//                             ) : (
//                                 item.product && <MegaMenu product={item.product} />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;
