// import React from "react";

// const MegaMenu = ({ product }: any) => {
//   const menuClasses = `gap-5 px-40 p-3 `
//   const  colCount = product.length <= 2 ? 3 : Math.min(product.length, 6);
//   return (
//     <div className="absolute top-[105px] left-1/2 -translate-x-1/2 bg-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 w-[80vw] max-w-[5xl] border border-white">
//       <div className={`grid  ${colCount === 3 ? "grid-cols-3" : ""} 
//     ${colCount === 4 ? "grid-cols-4" : ""} 
//     ${colCount === 5 ? "grid-cols-5" : ""} 
//     ${colCount === 6 ? "grid-cols-6" : ""}  gap-4 p-5 bg-sky-950`}>
//         {product.map((item: any, i: number) => (
//           <div key={i} className="font-semibold space-y-5">
//             <h1 className="hover:opacity-50 text-white">{item.title}</h1>
//             <div className="space-y-3">
//               {item.items.map((item: any, i: number) => (
//                 <p key={i} className="text-sm text-white">
//                   {item}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;

import Link from "next/link";
import React from "react";

const MegaMenu = ({ product }:any) => {
    return (
        <div className="absolute top-[100%] left-0 w-[200px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="p-4 space-y-3">
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

