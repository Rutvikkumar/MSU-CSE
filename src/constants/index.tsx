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
  BriefcaseIcon,
  UserCheckIcon,
  MedalIcon,
  Info,
} from "lucide-react";

export const Item = [
  {
    category: "Home",
    href: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    category: "Academics",
    href: "/courses",
    icon: <GraduationCap className="w-5 h-5" />,
    product: [
      {
        title: "BE",
        href: "/courses",
      },
      {
        title: "BCA",
        href: "/courses",
      },
      {
        title: "Ph.d",
        href: "/courses",
      },
    ],
  },
  {
    category: "Student Corner",
    href: "/",
    icon: <Users className="w-5 h-5" />,
    product: [
      {
        title: "Student Council 2024-25 ",
        href: "/neuralize",
      },
      {
        title: "Facilities",
        href: "/facilities",
      },
      {
        title: "Mega Event",
        href: "/dev-infinity",
      },
      {
        title: "Extention Activities",
        href: "/dev-infinity",
      },
      {
        title: "Important Links",
        href: "/dev-infinity",
      },
      {
        title: "DownLoadable Form",
        href: "/dev-infinity",
      },
      {
        title: "Clubs",
        href: "/clubs",
      },
      {
        title: "Syllabus",
        href: "/syllabus",
      },
    ],
  },
  {
    category: "Placement",
    href: "/placement",
    icon: <BriefcaseIcon className="w-5 h-5" />,
    product: [
      {
        title: "Internship and Placemanet",
        href: "/placement",
      },
      {
        title: "Company Detail",
        href: "/company",
      },
      {
        title: "MOU",
        href: "/placement/contact",
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
    icon: <UserCheckIcon className="w-5 h-5" />,
    product: [
      {
        title: "MSU Alumni",
        href: "/alumni",
      },
      {
        title: "Alumni Registration form",
        href: "/alumni/regi-form",
      },
    ],
  },
  {
    category: "About Us",
    href: "/about",
    icon: <Info className="w-5 h-5" />,
    product: [
      {
        title: "About MSU",
        href: "/about",
      },
      {
        title: "Dream, Vision, Mission",
        href: "/about",
      },
      {
        title: "About Vadodra",
        href: "/about/aboutcity",
      },
      {
        title: "Faculty Team",
        href: "/staff",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    category: "Accreditations & Rankinkg",
    href: "/about",
    icon: <MedalIcon className="w-5 h-5" />,
  },
];
