
import { FaUniversity, FaUsers, FaBullseye, FaNewspaper, FaChalkboardTeacher, FaAward } from 'react-icons/fa'

export const aboutSections = [
  {
    id: 'cse-department',
    title: 'CSE Department',
    description: 'Learn about our history, infrastructure, and achievements',
    link: '/about/cse-department',
    iconName: 'university'
  },
  {
    id: 'dream-vision-mission',
    title: 'Dream, Vision & Mission',
    description: 'Our guiding principles and future aspirations',
    link: '/about/dream-vision-mission',
    iconName: 'bullseye'
  },
  {
    id: 'hod-message',
    title: 'Message from HoD',
    description: 'Words from our Head of Department',
    link: '/about/hod-message',
    iconName: 'chalkboardTeacher'
  },
  {
    id: 'cse-in-news',
    title: 'CSE in News',
    description: 'Media coverage and department highlights',
    link: '/about/cse-in-news',
    iconName: 'newspaper'
  },
  {
    id: 'faculty-team',
    title: 'Faculty Team',
    description: 'Meet our experienced faculty members',
    link: '/about/faculty-team',
    iconName: 'faUsers'
  },
  {
    id: 'accreditations',
    title: 'Accreditations',
    description: 'Our quality certifications and rankings',
    link: '/about/accreditations-rankings',
    icon: 'award'
  }
]

export const departmentInfo = {
  established: 1985,
  location: "Faculty of Technology and Engineering, MSU Baroda",
  facilities: [
    "10 Modern Computer Labs",
    "High Performance Computing Center",
    "Department Library",
    "Research Labs"
  ],
  achievements: [
    "NBA Accredited Program",
    "Ranked among top 50 CSE departments in India",
    "100+ Research Publications annually"
  ]
}

export type AboutSectionIcon = typeof aboutSections[number]['iconName'];