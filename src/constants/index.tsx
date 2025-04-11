// import {
//   Home,
//   BookOpen,
//   GraduationCap,
//   Users,
//   Contact,
//   Info,
//   BriefcaseIcon,
//   UserCheckIcon,
//   MedalIcon,
//   Bookmark,
//   UserCircle,
// } from "lucide-react";

// export const Item = [
//   {
//     category: "Home",
//     href: "/",
//     icon: <Home className="w-5 h-5" />,
//   },
//   {
//     category: "Academics",
//     href: "/courses",
//     icon: <GraduationCap className="w-5 h-5" />,
//     product: [
//       {
//         title: "BE",
//         href: "/be",
//         items: ["...."],
//       },
//       {
//         title: "BCA",
//         href: "/bca",
//         items: ["....."],
//       },
//       {
//         title: "Ph.d",
//         href: "/phd",
//         items: ["......"],
//       },
//     ],
//   },
//   {
//     category: "Student Corner",
//     href: "/clubs",
//     icon: <Users className="w-5 h-5" />,
//     product: [
//       {
//         title: "Neuralize",
//         href: "/neuralize",
//         items: ["UpComing Events", "Events"],
//       },
//       {
//         title: "Code Vimarsh",
//         href: "/code-vimarsh",
//         items: ["UpComing Events", "Events"],
//       },
//       {
//         title: "Dev Infinity",
//         href: "/dev-infinity",
//         items: ["UpComing Events", "Events"],
//       },
//     ],
//   },
//   {
//     category: "Placement",
//     href: "/staff",
//     icon: <BriefcaseIcon className="w-5 h-5" />,
//   },
//   {
//     category: "Alumni",
//     href: "/contact",
//     icon: <UserCheckIcon className="w-5 h-5" />,
//   },
//   {
//     category: "Accreditations & Rankinkg",
//     href: "/about",
//     icon: <MedalIcon className="w-5 h-5" />,
//   },
//   {
//     category: "About Us",
//     href: "/about",
//     icon: <Info className="w-5 h-5" />,
//   },
// ];

import {
  Home,
  GraduationCap,
  Users,
  Briefcase,
  UserCircle,
  Award,
  Info,
  BookOpen,
  ShieldCheck,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export const Item = [
  {
    category: "Home",
    href: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    category: "About Us",
    href: "/about",
    icon: <Info className="w-5 h-5" />,
    product: [
      {
        title: "CSE Department",
        href: "/about/cse-department",

      },
      {
        title: "Dream, Vision, and Mission",
        href: "/about/dream-vision-mission",

      },
      {
        title: "Message from HoD",
        href: "/about/hod-message",

      },
      {
        title: "CSE in News",
        href: "/about/cse-in-news",

      },
      {
        title: "Faculty of Technology and Engineering",
        href: "/about/faculty-technology-engineering",

      },
      {
        title: "The M. S. University",
        href: "/about/msu-university",

      },
      {
        title: "The Vadodara City",
        href: "/about/vadodara-city",

      },
      {
        title: "Faculty Team",
        href: "/about/faculty-team",

      },
      {
        title: "IQAC",
        href: "/blank.pdf",
      },
      {
        title: "AICTE",
        href: "/blank.pdf",

      },
      {
        title: "Accreditations and Rankings",
        href: "/about/accreditations-rankings",

      },
      {
        title: "Cells and Committees",
        href: "/about/cells-committees",

      },
    ],
  },
  {
    category: "Academics",
    href: "/academics",
    icon: <GraduationCap className="w-5 h-5" />,
    product: [
      {
        title: "BE (CSE)",
        href: "/academics/be-cse",
      },
      {
        title: "MCA",
        href: "/academics/mca",
      },
      {
        title: "Ph.D. (CSE)",
        href: "/academics/phd-cse",
      },
    ],
  },
  {
    category: "Research & Consultancy",
    href: "/research-consultancy",
    icon: <BookOpen className="w-5 h-5" />,
    product: [
      {
        title: "Ph.D. Program",
        href: "/research-consultancy/phd-program",
      },
      {
        title: "List of Research Supervisors",
        href: "/research-consultancy/research-supervisors",
      },
      {
        title: "List of Research Scholars",
        href: "/research-consultancy/research-scholars",
      },
      {
        title: "TechoCSE E-Newsletter",
        href: "/research-consultancy/technocse-newsletter",
      },
    ],
  },
  {
    category: "Student Corner",
    href: "/student-corner",
    icon: <Users className="w-5 h-5" />,
    product: [
      {
        title: "Life @CSE Department",
        href: "/student-corner/life-at-cse",
      },
      {
        title: "Department Facilities",
        href: "/student-corner/department-facilities",
      },
      {
        title: "Central Facilities",
        href: "/student-corner/central-facilities",
      },
      {
        title: "Events & Activities",
        href: "/student-corner/events-activities",
      },
      {
        title: "Gallery",
        href: "/student-corner/gallery",
      },
      {
        title: "Syllabus",
        href: "/student-corner/syllabus",
      },
      {
        title: "Students Club",
        href: "/student-corner/students-club",
      },
      {
        title: "Students Committees",
        href: "/student-corner/students-committees",
      },
      {
        title: "Important Links",
        href: "/student-corner/important-links",
      },
      {
        title: "Downloadable Forms",
        href: "/student-corner/downloadable-forms",
      },
    ],
  },
  {
    category: "Placement",
    href: "/placement",
    icon: <Briefcase className="w-5 h-5" />,
    product: [
      {
        title: "Internship and Placement",
        href: "/placement/internship-placement",
      },
      {
        title: "Company Detail",
        href: "/placement/company-detail",
      },
      {
        title: "MOU",
        href: "/blank.pdf",
      },
      {
        title: "Contact Placement Office",
        href: "/placement/contact-placement-office",
      },
    ],
  },
  {
    category: "Alumni",
    href: "/alumni",
    icon: <UserCircle className="w-5 h-5" />,
    product: [
      {
        title: "CSE Alumni",
        href: "/alumni/cse-alumni",
      },
      {
        title: "Alumni Registration Form",
        href: "/alumni/alumni-registration",
      },
      {
        title: "Reach us with LinkedIn Page",
        href: "/alumni/reach-us-linkedin",
      },
    ],
  },
  // {
  //   category: "Accreditations & Rankings",
  //   href: "/accreditations-rankings",
  //   icon: <ShieldCheck className="w-5 h-5" />,
  //   product: [
  //     {
  //       title: "NAAC",
  //       href: "/accreditations-rankings/naac",
  //     },
  //     {
  //       title: "NBA",
  //       href: "/accreditations-rankings/nba",
  //     },
  //     {
  //       title: "NIRF",
  //       href: "/accreditations-rankings/nirf",
  //     },
  //   ],
  // },
  {
    category: "Reach Us",
    href: "/reach-us",
    icon: <Mail className="w-5 h-5" />,
    product: [
      {
        title: "Contact",
        href: "/reach-us/contact",
      },
      {
        title: "Media Kit",
        href: "/reach-us/media-kit",
      },
      {
        title: "Education Verification",
        href: "/reach-us/education-verification",
      },
      {
        title: "Connect with us on LinkedIn",
        href: "/reach-us/linkedin",
      },
      {
        title: "Connect with us on Instagram",
        href: "/reach-us/instagram",
      },
      {
        title: "Connect with us on Facebook",
        href: "/reach-us/facebook",
      },
      {
        title: "Connect with us on LinkedIn (Alumni Page)",
        href: "/reach-us/linkedin-alumni",
      },
    ],
  },
];