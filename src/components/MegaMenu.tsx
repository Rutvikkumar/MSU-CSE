import React from "react";

const MegaMenu = ({ product }: any) => {
  const menuClasses = `gap-5 px-40 p-3 `
  const  colCount = product.length <= 2 ? 3 : Math.min(product.length, 6);
  return (
    <div className="absolute top-[110px] left-1/2 -translate-x-1/2 bg-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 w-[80vw] max-w-[5xl]">
      <div className={`grid  ${colCount === 3 ? "grid-cols-3" : ""} 
    ${colCount === 4 ? "grid-cols-4" : ""} 
    ${colCount === 5 ? "grid-cols-5" : ""} 
    ${colCount === 6 ? "grid-cols-6" : ""}  gap-4 p-5 bg-sky-950`}>
        {product.map((item: any, i: number) => (
          <div key={i} className="font-semibold space-y-5">
            <h1 className="hover:opacity-50 text-white">{item.title}</h1>
            <div className="space-y-3">
              {item.items.map((item: any, i: number) => (
                <p key={i} className="text-sm opacity-70 hover:opacity-100 text-sky-100">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;