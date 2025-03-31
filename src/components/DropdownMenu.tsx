import React from 'react';
import Link from 'next/link';

interface DropdownItem {
  title: string;
  href: string;
  items: string[];
}

interface DropdownMenuProps {
  product: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ product }) => {
  return (
    <div className="absolute top-full left-0 bg-white text-sky-950 shadow-lg rounded-b-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 border border-gray-200 z-50">
      <div className="py-2">
        {product.map((item, i) => (
          <Link 
            key={i} 
            href={item.href}
            className="block px-4 py-2 hover:bg-sky-100 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;