import {
  Home,
  BookOpen,
  GraduationCap,
  Users,
  Contact,
  Info,
  BriefcaseIcon,
  UserCheckIcon,
  MedalIcon,
  Bookmark,
  UserCircle,
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
        href: "/be",
        items: ["...."],
      },
      {
        title: "BCA",
        href: "/bca",
        items: ["....."],
      },
      {
        title: "Ph.d",
        href: "/phd",
        items: ["......"],
      },
    ],
  },
  {
    category: "Student Corner",
    href: "/clubs",
    icon: <Users className="w-5 h-5" />,
    product: [
      {
        title: "Neuralize",
        href: "/neuralize",
        items: ["UpComing Events", "Events"],
      },
      {
        title: "Code Vimarsh",
        href: "/code-vimarsh",
        items: ["UpComing Events", "Events"],
      },
      {
        title: "Dev Infinity",
        href: "/dev-infinity",
        items: ["UpComing Events", "Events"],
      },
    ],
  },
  {
    category: "Placement",
    href: "/staff",
    icon: <BriefcaseIcon className="w-5 h-5" />,
  },
  {
    category: "Alumni",
    href: "/contact",
    icon: <UserCheckIcon className="w-5 h-5" />,
  },
  {
    category: "Accreditations & Rankinkg",
    href: "/about",
    icon: <MedalIcon className="w-5 h-5" />,
  },
  {
    category: "About Us",
    href: "/about",
    icon: <Info className="w-5 h-5" />,
  },
];
