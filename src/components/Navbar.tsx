"use client"
import { Item } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
            <div className="pr-20">

                <div className="hidden xl:flex gap-4 text-white z-20">
                    {Item.map((item) => (
                        <div key={item.category} className="group relative">
                            <Link
                                href={item.href}
                                className="text-lg font-semibold flex items-center gap-1 custom-border"
                            >
                                {item.category}
                            </Link>

                            {item.product && <MegaMenu product={item.product} />}
                        </div>
                    ))}
                </div>



            </div>
            <div className="lg:flex xl:hidden items-center z-20">
                <button
                    onClick={toggleMenu}
                    className="text-white text-2xl"
                >
                    {isOpen ? "X" : "☰"}
                </button>
            </div>


            <div
                className={`2xl:hidden absolute top-0 left-0 right-0 bg-sky-950 text-white flex flex-col items-center space-y-4 py-6 px-10 transform transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {Item.map((item) => (
                    <div key={item.category} className="group relative w-full">
                        <Link
                            href={item.href}
                            className="text-lg font-semibold py-1 hover:border-b-[3px] border-white flex items-center gap-1"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.icon}
                            {item.category}
                        </Link>

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

