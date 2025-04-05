import Link from 'next/link'

interface AboutCardProps {
  title: string
  description: string
  link: string
  icon: React.ReactNode
}

export default function AboutCards({ title, description, link, icon }: AboutCardProps) {
  return (
    <Link href={link}>
      <div className="border rounded-lg p-6 hover:shadow-lg transition-all h-full flex flex-col items-center text-center">
        <div className="text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}