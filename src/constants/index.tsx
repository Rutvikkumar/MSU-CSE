import {
    Home,
    BookOpen,
    GraduationCap,
    Users,
    Contact,
    Info,
    Bookmark,
    UserCircle
} from "lucide-react";

export const Item = [
    {
        category: "Home",
        href: "/",
        icon: <Home className="w-5 h-5" />,
    },
    {
        category: "Courses",
        href: "/courses",
        icon: <BookOpen className="w-5 h-5" />,
        product: [
            {
                title: "BE",
                href: "/be",
                items: [
                    "....",
                ]
            },
            {
                title: "BCA",
                href: "/bca",
                items: [
                    ".....",
                ]
            },
            {
                title: "Ph.d",
                href: "/phd",
                items: [
                    "......",
                ]
            },
        ]
    },
    {
        category: "Syllabus",
        href: "/syllabus",
        icon: <GraduationCap className="w-5 h-5" />,
        product: [
            {
                title: "BE",
                href: "/be",
                items: [
                    "Sem1",
                    "Sem2",
                    "Sem3",
                    "Sem4",
                    "Sem5",
                ]
            },
            {
                title: "BCA",
                href: "/bca",
                items: [
                    "Sem1",
                    "Sem2",
                    "Sem3",
                ]
            },
            {
                title: "Ph.d",
                href: "/phd",
                items: [
                    "Sem1",
                    "Sem2",
                    "Sem3",
                    "Sem4",
                ]
            },
        ]
    },
    {
        category: "Clubs",
        href: "/clubs",
        icon: <Users className="w-5 h-5" />,
        product: [
            {
                title: "Neuralize",
                href: "/neuralize",
                items: [
                    "UpComing Events",
                    "Events",
                ]
            },
            {
                title: "Code Vimarsh",
                href: "/code-vimarsh",
                items: [
                    "UpComing Events",
                    "Events",
                ]
            },
            {
                title: "Dev Infinity",
                href: "/dev-infinity",
                items: [
                    "UpComing Events",
                    "Events",
               ]
            },
        ]
    },
    {
        category: "Staff",
        href: "/staff",
        icon: <UserCircle className="w-5 h-5" />,

    },
    {
        category: "Contact",
        href: "/contact",
        icon: <Contact className="w-5 h-5" />,
    },
    {
        category: "About",
        href: "/about",
        icon: <Info className="w-5 h-5" />,
    },

]