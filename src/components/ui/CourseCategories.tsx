import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the category type
type Category = {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
};

// Props interface
interface CourseCategoriesProps {
  categories: Category[];
}

const CourseCategories: React.FC<CourseCategoriesProps> = ({ categories }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-4">
          COURSE CATEGORIES
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et.
        </p>
        
        {/* Divider with icon */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gray-300 w-32"></div>
          <div className="mx-4 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-5-9-5-9 5 9 5z" />
            </svg>
          </div>
          <div className="h-px bg-gray-300 w-32"></div>
        </div>
        
        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center text-center">
              <div className="text-blue-500 mb-4">
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;