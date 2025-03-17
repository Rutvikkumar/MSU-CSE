"use client";
import React from "react";
import Head from "next/head";
import CourseCategories from "../components/ui/CourseCategories.tsx"
import Link from "next/link"
import Image from "next/image";

const data = [
  {
    url:"/bg1.jpg",
    title:"BackGround 1",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex amet itaque dicta laborum praesentium? Voluptatum iure alias ad porro quam laudantium sunt animi exercitationem ex! A nulla nostrum quaerat."
  },
  {
    url:"/bg2.jpg",
    title:"BackGround 2",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex amet itaque dicta laborum praesentium? Voluptatum iure alias ad porro quam laudantium sunt animi exercitationem ex! A nulla nostrum quaerat."
  },
  {
    url:"/brand.jpg",
    title:"BackGRound 3",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex amet itaque dicta laborum praesentium? Voluptatum iure alias ad porro quam laudantium sunt animi exercitationem ex! A nulla nostrum quaerat."
  }
]
export default function Main(){
  const [index,setIndex] = React.useState(0);

  React.useEffect(()=>{
    const timer = setTimeout(()=>{
      setIndex(prev => (prev+1) % data.length);
    },5000);
    return ()=>clearTimeout(timer);
  },[index]);
  const bgSyle={
    backgroundImage:`url(${data[index].url})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:'100%'
  }


  const categories = [
    {
      id: '1',
      title: 'SCIENCE & TECHNOLOGY',
      description: 'Lorem ipsum dolor sit amet, consecte elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut.',
      icon: '/icons/science-icon.svg', // You'll need to create these icons
      link: '/courses/science'
    },
    {
      id: '2',
      title: 'HEALTH & PSYCHOLOGY',
      description: 'Lorem ipsum dolor sit amet, consecte elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut.',
      icon: '/icons/health-icon.svg',
      link: '/courses/health'
    },
    {
      id: '3',
      title: 'REAL ESTATE LAW',
      description: 'Lorem ipsum dolor sit amet, consecte elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut.',
      icon: '/icons/realestate-icon.svg',
      link: '/courses/realestate'
    },
    {
      id: '4',
      title: 'SCIENCE & TECHNOLOGY',
      description: 'Lorem ipsum dolor sit amet, consecte elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut.',
      icon: '/icons/technology-icon.svg',
      link: '/courses/technology'
    },
  ];
  return(
    <>
    <header className="flex items-center justify-between py-5 px-8  text-black bg-white drop-shadow-md">
      <section className="w-4/5 mx-auto flex items-center justify-between">
      <a href="#">
        <img className="w-44 hover:scale-105 transition-all" src="/next.svg" alt="TEXT"/>
      </a>
      <nav>
        <ul className="flex gap-3">
          <Link className=" text-xl py-3 px-4 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Home</Link>
          <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">About</Link>
          <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">News</Link>
          <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Staff</Link>
          <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Contact</Link>
          <Link className=" text-xl py-3 px-5 hover:bg-sky-400 transition-all rounded hover:text-white cursor-pointer" href="#">Courses</Link>
        </ul>
      </nav>
      </section>
    </header>
    <main className="bg-blue-300 w-full flex flex-col items-center justify-center h-screen">
      <section style={bgSyle} className="w-full relative flex items-center justify-center">
        <section className="text-black border rounded w-2/5">
          <h1 className="text-center text-2xl">{data[index].title}</h1>
          <p className="text-center">{data[index].body}</p>
        </section>
      </section>
    </main>

    <Head>
        <title>Course Categories</title>
        <meta name="description" content="Browse our course categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <CourseCategories categories={categories} />
      </main>
    
      <footer className="w-full items-center justify-center py-8 bg-blue-500">
      <section className="w-4/5 mx-auto flex items-center justify-between">
        <section className="flex flex-col space-y-4">
          <section className="flex space-x-8">
            <section className="flex flex-col gap-4">
              <a href="#" className="text-blue-200 hover:text-white">Events</a>
              <a href="#" className="text-blue-200 hover:text-white">About</a>
              <a href="#" className="text-blue-200 hover:text-white">Clubs</a>
              <a href="#" className="text-blue-200 hover:text-white">News</a>
            </section>
            <section className="flex flex-col gap-4">
              <a href="#" className="text-blue-200 hover:text-white">MSU Website</a>
              <a href="#" className="text-blue-200 hover:text-white">FOTE Website</a>
              <a href="#" className="text-blue-200 hover:text-white">Enquiry</a>
              <a href="#" className="text-blue-200 hover:text-white">Contact</a>
            </section>
          </section>
          <section className="text-sm text-blue-300">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </section>
        </section>
      </section>
    </footer>
   
    </>
  )
}