"use client"

import { useState } from "react"
import Link from "next/link"

export default function Clubs() {
    const [clubs] = useState([
        {
            name: "Neuralize",
            description: "AI/ML Club - Exploring Artificial Intelligence and Machine Learning",
            id: "neuralize",
            logo: "/logos/neuralize.png",
            events: [
                { title: "AI Hackathon", date: "2025-04-15", location: "Lab 1" },
                { title: "ML Workshop", date: "2025-05-20", location: "Seminar Hall" },
                { 
                    title: "Neural Net Intro", 
                    date: "2025-03-10", 
                    location: "Lab 1", 
                    completed: true,
                    image: "/events/neural-net-intro.jpg",
                    shortDesc: "Introduction to neural networks and their applications"
                }
            ]
        },
        {
            name: "Code Vimarsh",
            description: "DSA and Programming Club - Mastering Data Structures and Algorithms",
            id: "code-vimarsh",
            logo: "/logos/code-vimarsh.png",
            events: [
                { title: "CodeSprint", date: "2025-04-25", location: "Lab 2" },
                { title: "DSA Bootcamp", date: "2025-06-10", location: "Lab 3" },
                { 
                    title: "Algo Basics", 
                    date: "2025-02-15", 
                    location: "Lab 2", 
                    completed: true,
                    image: "/events/algo-basics.jpg",
                    shortDesc: "Fundamentals of algorithms and problem-solving"
                }
            ]
        },
        {
            name: "Dev Infinity",
            description: "Development Club - Building Innovative Software Solutions",
            id: "dev-infinity",
            logo: "/logos/dev-infinity.png",
            events: [
                { title: "Web Dev Contest", date: "2025-05-05", location: "Lab 4" },
                { title: "App Dev Workshop", date: "2025-06-15", location: "Lab 5" },
                { 
                    title: "Git 101", 
                    date: "2025-03-01", 
                    location: "Lab 4", 
                    completed: true,
                    image: "/events/git-101.jpg",
                    shortDesc: "Basics of version control with Git"
                }
            ]
        }
    ])

    const [selectedClub, setSelectedClub] = useState(null)

    // Function to format dates consistently
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        }) // Forces MM/DD/YYYY format
    }

    // Get all completed events sorted by date with club info
    const completedEvents = clubs
        .flatMap(club => 
            club.events
                .filter(event => event.completed)
                .map(event => ({ ...event, clubName: club.name }))
        )
        .sort((a, b) => new Date(a.date) - new Date(b.date))

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-center">
                CSE Department Clubs - FTE MSU Baroda
            </h1>

            {/* Completed Events Ticker with Heading */}
            {completedEvents.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-center mb-2">
                        Successfully Completed Events
                    </h2>
                    <div className="w-full overflow-hidden bg-gray-200 py-4">
                        <div className="animate-ticker flex whitespace-nowrap">
                            {completedEvents.map((event, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center mx-6 text-sm"
                                >
                                    {event.image && (
                                        <img
                                            src={event.image}
                                            alt={`${event.title} image`}
                                            className="w-16 h-16 object-cover mr-4 rounded"
                                            onError={(e) => { e.target.src = "/events/default.jpg" }}
                                        />
                                    )}
                                    <div>
                                        <span className="font-bold">{event.title}</span>
                                        <span className="mx-2">•</span>
                                        <span>{event.clubName}</span>
                                        <span className="mx-2">•</span>
                                        <span>{event.shortDesc}</span>
                                        <span className="mx-2">•</span>
                                        <span>{formatDate(event.date)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {clubs.map((club) => (
                    <div 
                        key={club.id}
                        className="border rounded-lg p-6 bg-white hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            <img 
                                src={club.logo} 
                                alt={`${club.name} logo`}
                                className="w-16 h-16 mr-4 object-contain"
                                onError={(e) => { e.target.src = "/logos/default.png" }}
                            />
                            <div>
                                <h2 className="text-xl font-semibold">{club.name}</h2>
                                <p className="text-gray-600 text-sm">{club.description}</p>
                            </div>
                        </div>
                        
                        <button
                            onClick={() => setSelectedClub(club.id === selectedClub ? null : club.id)}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
                        >
                            {selectedClub === club.id ? "Hide Events" : "Show Events"}
                        </button>

                        {selectedClub === club.id && (
                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Upcoming Events:</h3>
                                <ul className="space-y-2">
                                    {club.events
                                        .filter(event => !event.completed)
                                        .map((event, index) => (
                                            <li 
                                                key={index}
                                                className="border-l-4 border-blue-500 pl-2 text-sm"
                                            >
                                                <strong>{event.title}</strong>
                                                <br />
                                                Date: {formatDate(event.date)}
                                                <br />
                                                Location: {event.location}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                        
                        <Link 
                            href={`/clubs/${club.id}`}
                            className="text-blue-500 hover:text-blue-700 block mt-4"
                        >
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}