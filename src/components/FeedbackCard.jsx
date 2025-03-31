// components/TestimonialCards.jsx
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    title: "Awesome Coding",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    author: "Person Name",
    description: "Description",
    rating: 5,
    image: "/staff/profile.jpg"
  },
  {
    id: 2,
    title: "Awesome Coding",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    author: "Person Name",
    description: "Description",
    rating: 5,
    image: "/staff/profile.jpg"
  },
  {
    id: 3,
    title: "Exceptional Service",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Principal name",
    description: "Client",
    rating: 4,
    image: "/staff/profile.jpg"
  }
];

const TestimonialCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <div className="w-full bg-blue-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sky-950 mb-12">Why Should You Join MSU ?</h2>
        
        <div className="flex flex-wrap justify-center">
          {/* Display two cards side by side on larger screens, one card on smaller screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
            {[0, 1].map((offset) => {
              const index = (activeIndex + offset) % testimonials.length;
              return (
                <div 
                  key={testimonials[index].id}
                  className="bg-sky-950 rounded-lg p-8 relative"
                >
                  <div className="text-4xl text-amber-400 mb-4">&ldquo;</div>
                  {/* <h3 className="text-2xl font-semibold text-white mb-4">{testimonials[index].title}</h3> */}
                  <p className="text-white mb-6">{testimonials[index].content}</p>
                        
                  <div className="flex items-center">
                    <div className="w-12 h-12 relative mr-4 overflow-hidden rounded-full">
                      <Image 
                        src={testimonials[index].image} 
                        alt={testimonials[index].author}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-amber-400">{testimonials[index].author}</h4>
                      <p className="text-gray-500">{testimonials[index].description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-amber-400' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-transparent text-amber-400 hover:bg-gray-800 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-transparent text-amber-400 hover:bg-gray-800 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;