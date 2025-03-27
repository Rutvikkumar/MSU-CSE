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
                    "New Releases",
                    "Bestsellers",
                    "Member Exclusive",
                    "Jordan",
                ]
            },
            {
                title: "BCA",
                href: "/bca",
                items: [
                    "All Jordan",
                    "New Jordan",
                    "Jordan Shoes",
                    "Jordan Clothing",

                ]
            },
            {
                title: "Ph.d",
                href: "/phd",
                items: [
                    "All Shoes",
                    "Newest Sneakers",
                    "Jordan",
                    "Lifestyle",
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
                    "Bestsellers",
                    "Member Exclusive",
                    "Jordan",
                ]
            },
            {
                title: "BCA",
                href: "/bca",
                items: [
                    "All Jordan",
                    "New Jordan",
                    "Jordan Shoes",
                    "Jordan Clothing",

                ]
            },
            {
                title: "Ph.d",
                href: "/phd",
                items: [
                    "All Shoes",
                    "Newest Sneakers",
                    "Jordan",
                    "Lifestyle",
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
                    "New Releases",
                    "Bestsellers",
                    "Member Exclusive",
                    "Jordan",

                ]
            },
            {
                title: "Code Vimarsh",
                href: "/code-vimarsh",
                items: [
                    "All Shoes",
                    "Newest Sneakers",
                    "Platform Sneakers",
                    "Lifestyle",
                    "Jordan",

                ]
            },
            {
                title: "Dev Infinity",
                href: "/dev-infinity",
                items: [
                    "All Clothing",
                    "Performance Essentials",

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
        product: [
            {
                title: "Sale",
                href: "/sale",
                items: [
                    "Shop All Sale",
                    "Shoes Sale",
                    "Clothing Sale",
                    "Accesories and Equipment Sale",
                ]
            },
            {
                title: "Men's Sale",
                href: "/mens-sale",
                items: [
                    "Shoes",
                    "Clothing",
                ]
            },
            {
                title: "Women's Sale",
                href: "/womens-sale",
                items: [
                    "Shoes",
                    "Clothing",
                ]
            },
            {
                title: "Kids's Sale",
                href: "/kidss-sale",
                items: [
                    "Shoes",
                    "Clothing",
                ]
            },
        ]
    },
    {
        category: "About",
        href: "/about",
        icon: <Info className="w-5 h-5" />,
    },

]