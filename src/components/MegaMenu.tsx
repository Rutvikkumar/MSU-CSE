import Link from "next/link";
import React from "react";

const MegaMenu = ({ product }:any) => {
    return (
        <div className="absolute top-[100%] left-0 w-[200px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="p-4 space-y-5">
                {product.map((item:any, i:number) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="block text-sky-950 hover:text-blue-600 font-semibold"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;

