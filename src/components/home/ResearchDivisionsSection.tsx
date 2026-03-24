import {
  BarChart3,
  BookOpen,
  Globe,
  Heart,
  TrendingUp,
  Users,
} from 'lucide-react'

const researchDivisions = [
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: 'Economics',
    description: 'Economic research and policy analysis',
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: 'Education',
    description: 'Educational outcomes and systems research',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Global',
    description: 'International research initiatives',
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: 'Health',
    description: 'Healthcare and public health research',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Public Affairs',
    description: 'Policy and public opinion research',
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: 'Research Science',
    description: 'Advanced research methodologies',
  },
]

export function ResearchDivisionsSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-neutral-900">
            Our Research Divisions
          </h2>
          <p className="text-lg text-neutral-600">
            NORC's broad research expertise allows us to study almost every
            aspect of the human experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchDivisions.map((division) => (
            <div
              key={division.title}
              className="group cursor-pointer rounded-lg border border-gray-200 p-8 transition-all hover:border-orange-400 hover:shadow-md"
            >
              <div className="mb-4 text-neutral-900 transition-colors group-hover:text-orange-500">
                {division.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-neutral-900 transition-colors group-hover:text-orange-600">
                {division.title}
              </h3>
              <p className="text-neutral-600">{division.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
