"use client"

import { useState } from "react"
import Link from "next/link"

export default function Courses() {
    // Sample course data organized by program and year
    const [courses] = useState({
        "BE CSE": {
            "Year 1": [
                { code: "CSE101", name: "Introduction to Programming", credits: 4 },
                { code: "CSE102", name: "Computer Fundamentals", credits: 3 },
                { code: "MAT101", name: "Mathematics I", credits: 4 }
            ],
            "Year 2": [
                { code: "CSE201", name: "Data Structures", credits: 4 },
                { code: "CSE202", name: "Digital Logic Design", credits: 3 },
                { code: "CSE203", name: "Object-Oriented Programming", credits: 4 }
            ],
            "Year 3": [
                { code: "CSE301", name: "Operating Systems", credits: 4 },
                { code: "CSE302", name: "Database Management Systems", credits: 4 },
                { code: "CSE303", name: "Computer Networks", credits: 3 }
            ],
            "Year 4": [
                { code: "CSE401", name: "Artificial Intelligence", credits: 4 },
                { code: "CSE402", name: "Software Engineering", credits: 4 },
                { code: "CSE403", name: "Project Work", credits: 6 }
            ]
        },
        "MCA": {
            "Year 1": [
                { code: "MCA101", name: "Programming in Java", credits: 4 },
                { code: "MCA102", name: "Discrete Mathematics", credits: 3 },
                { code: "MCA103", name: "Database Systems", credits: 4 }
            ],
            "Year 2": [
                { code: "MCA201", name: "Web Technologies", credits: 4 },
                { code: "MCA202", name: "Cloud Computing", credits: 4 },
                { code: "MCA203", name: "Project Dissertation", credits: 6 }
            ]
        },
        "PhD": {
            "Year 1": [
                { code: "PHD101", name: "Research Methodology", credits: 4 },
                { code: "PHD102", name: "Advanced Algorithms", credits: 4 }
            ],
            "Year 2": [
                { code: "PHD201", name: "Specialization Elective", credits: 4 },
                { code: "PHD202", name: "Literature Review", credits: 4 }
            ],
            "Year 3": [
                { code: "PHD301", name: "Thesis Work", credits: 12 }
            ]
        }
    })

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">
                MSU FTE Baroda - CSE Department Courses
            </h1>

            {Object.entries(courses).map(([program, years]) => (
                <div key={program} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                        {program}
                    </h2>
                    {Object.entries(years).map(([year, courseList]) => (
                        <div key={year} className="mb-6">
                            <h3 className="text-xl font-medium mb-2">{year}</h3>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {courseList.map((course) => (
                                    <div
                                        key={course.code}
                                        className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                                    >
                                        <h4 className="text-lg font-semibold">
                                            {course.code}: {course.name}
                                        </h4>
                                        <p className="text-sm mt-2">
                                            <span className="font-medium">Credits:</span> {course.credits}
                                        </p>
                                        <Link
                                            href={`/courses/${course.code}`}
                                            className="mt-3 inline-block text-blue-500 hover:text-blue-700"
                                        >
                                            View Details →
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}