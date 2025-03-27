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
            <div className="flex justify-between items-center px-20 py-2 bg-sky-950 border-b-2 sticky top-0 left-0 right-0 z-50">
                <div>
                    <Image
                        src={"/logo_msu.png"}
                        alt="Nike Logo"
                        width={80}
                        height={80}
                    />
                </div>
                <div className="flex gap-6 pr-6 text-white z-20 ">
                    {Item.map((item) => (
                        <div key={item.category} className="group">
                            <Link
                                href={item.href}
                                className="text-lg font-semibold py-1 hover:border-b-[3px] border-white"
                            >
                                <span className="flex items-center gap-1">
                                    {item.icon}
                                    {item.category}
                                    {item.product && <MegaMenu product={item.product} />}
                                </span>   
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Navbar;


{/* <div className="flex justify-between items-center px-20 py-2 bg-sky-950 border-b-2 sticky top-0 left-0 right-0 z-50">
                <div>
                    <Image
                        src={"/logo_msu.png"}
                        alt="Nike Logo"
                        width={80}
                        height={80}
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
          </div> */}