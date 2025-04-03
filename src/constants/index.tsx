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
        href: "/about/department",
      },
      {
        title: "Dream, Vision, and Mission",
        href: "/about/vision-mission",
      },
      {
        title: "Message from HoD",
        href: "/about/hod-message",
      },
      {
        title: "CSE in News",
        href: "/about/news",
      },
      {
        title: "Faculty of Technology and Engineering",
        href: "/about/faculty",
      },
      {
        title: "The M. S. University",
        href: "/about/msu",
      },
      {
        title: "The Vadodara City",
        href: "/about/city",
      },
      {
        title: "Faculty Team",
        href: "/about/faculty-team",
      },
      {
        title: "IQAC",
        href: "/about/iqac",
      },
      {
        title: "AICTE",
        href: "/about/aicte",
      },
      {
        title: "Accreditations and Rankings",
        href: "/about/accreditations",
      },
      {
        title: "Cells and Committees",
        href: "/about/committees",
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
        href: "/academics/be",
      },
      {
        title: "MCA",
        href: "/academics/mca",
      },
      {
        title: "Ph.D. (CSE)",
        href: "/academics/phd",
      },
    ],
  },
  {
    category: "Research & Consultancy",
    href: "/research",
    icon: <BookOpen className="w-5 h-5" />,
    product: [
      {
        title: "Ph.D. Program",
        href: "/research/phd-program",
      },
      {
        title: "List of Research Supervisors",
        href: "/research/supervisors",
      },
      {
        title: "List of Research Scholars",
        href: "/research/scholars",
      },
      {
        title: "TechoCSE E-Newsletter",
        href: "/research/newsletter",
      },
    ],
  },
  {
    category: "Student Corner",
    href: "/students",
    icon: <Users className="w-5 h-5" />,
    product: [
      {
        title: "Life @CSE Department",
        href: "/students/life",
      },
      {
        title: "Department Facilities",
        href: "/students/facilities",
      },
      {
        title: "Central Facilities",
        href: "/students/central-facilities",
      },
      {
        title: "Events & Activities",
        href: "/students/events",
      },
      {
        title: "Gallery",
        href: "/students/gallery",
      },
      {
        title: "Syllabus",
        href: "/students/syllabus",
      },
      {
        title: "Students Club",
        href: "/students/club",
      },
      {
        title: "Students Committees",
        href: "/students/committees",
      },
      {
        title: "Important Links",
        href: "/students/links",
      },
      {
        title: "Downloadable Forms",
        href: "/students/forms",
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
        href: "/placement",
      },
      {
        title: "Company Detail",
        href: "/placement/companies",
      },
      {
        title: "MOU",
        href: "/placement/mou",
      },
      {
        title: "Contact Placement Office",
        href: "/placement/contact",
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
        href: "/alumni",
      },
      {
        title: "Alumni Registration Form",
        href: "/alumni/registration",
      },
      {
        title: "Reach us with LinkedIn Page",
        href: "/alumni/linkedin",
      },
    ],
  },
  {
    category: "Accreditations & Rankings",
    href: "/accreditations",
    icon: <ShieldCheck className="w-5 h-5" />,
    product: [
      {
        title: "NAAC",
        href: "/accreditations/naac",
      },
      {
        title: "NBA",
        href: "/accreditations/nba",
      },
      {
        title: "NIRF",
        href: "/accreditations/nirf",
      },
    ],
  },
  {
    category: "Reach Us",
    href: "/contact",
    icon: <Mail className="w-5 h-5" />,
    product: [
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Media Kit",
        href: "/contact/media",
      },
      {
        title: "Education Verification",
        href: "/contact/verification",
      },
      {
        title: "Connect with us on LinkedIn",
        href: "/contact/linkedin",
      },
      {
        title: "Connect with us on Instagram",
        href: "/contact/instagram",
      },
      {
        title: "Connect with us on Facebook",
        href: "/contact/facebook",
      },
      {
        title: "Connect with us on LinkedIn (Alumni Page)",
        href: "/contact/alumni-linkedin",
      },
    ],
  },
];