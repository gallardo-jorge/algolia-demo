import {
  BarChart3,
  BookOpen,
  Globe,
  Heart,
  TrendingUp,
  Users,
} from 'lucide-react'
import { researchDivisions } from '../../data/home'

const divisionIcons = {
  'bar-chart': BarChart3,
  book: BookOpen,
  globe: Globe,
  heart: Heart,
  users: Users,
  'trending-up': TrendingUp,
}

function DivisionIcon({ icon }: { icon: keyof typeof divisionIcons }) {
  const Icon = divisionIcons[icon]

  return <Icon className="h-10 w-10" />
}

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
                <DivisionIcon icon={division.icon} />
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
