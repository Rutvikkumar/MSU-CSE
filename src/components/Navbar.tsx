import { Item } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
    return (
        <>

            <div className="flex justify-between items-center px-20 py-5 bg-sky-950 ">
                <div>
                    <Image
                        src={"/msu_logo.png"}
                        alt="Nike Logo"
                        width={60}
                        height={50}
                    />
                </div>
                <div className="flex gap-8 pr-6 text-white z-20 ">
                    {Item.map((item) => (
                        <div key={item.category} className="group">
                            <Link
                                href={item.href}
                                className="text-lg font-semibold py-1 hover:border-b-[3px] border-white"
                            >
                                {item.category}
                                {item.product && <MegaMenu product={item.product} />}
                            </Link>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default Navbar;
