import { createFileRoute } from '@tanstack/react-router'
import {
  TrendingUp,
  Globe,
  Users,
  BookOpen,
  Heart,
  BarChart3,
  ChevronRight,
} from 'lucide-react'
import { SparkStatement } from '../components/SparkStatement'
import { NorcAssistantHero } from '../components/NorcAssistantHero'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const researchDivisions = [
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Economics',
      description: 'Economic research and policy analysis',
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Education',
      description: 'Educational outcomes and systems research',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Global',
      description: 'International research initiatives',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Health',
      description: 'Healthcare and public health research',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Public Affairs',
      description: 'Policy and public opinion research',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Research Science',
      description: 'Advanced research methodologies',
    },
  ]

  const latestNews = [
    {
      title: 'How State Agencies Can Responsibly Use AI',
      category: 'Policy Analysis',
      date: 'March 2026',
      image: '📊',
    },
    {
      title: 'Evaluating the World\'s First Under-16 Social Media Ban',
      category: 'Global',
      date: 'March 2026',
      image: '📱',
    },
    {
      title: 'Forget Clickbait, Connection Is the Real Hook',
      category: 'Digital Society',
      date: 'March 2026',
      image: '🔗',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NorcAssistantHero />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Delivering Objective Insights
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-neutral-700">
              We deliver objective, nonpartisan insights and analysis that
              decision-makers trust. Our research informs the most important
              decisions affecting society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 text-white font-semibold rounded-lg bg-neutral-900 hover:bg-black transition-colors">
                Explore Our Research
              </button>
              <button className="px-8 py-3 font-semibold rounded-lg border-2 border-neutral-900 text-neutral-900 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Featured Story */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="https://s7d1.scene7.com/is/image/norc/State-Agency-GenAI-EV-Homepage:desktopHome"
                  alt="State Agency GenAI Research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-orange-600 font-semibold text-sm mb-2 uppercase tracking-wide">
                  Featured Research
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
                  How State Agencies Can Responsibly Use AI
                </h3>
                <p className="text-neutral-600 mb-6">
                  Our latest research explores how government agencies can
                  implement artificial intelligence responsibly and effectively
                  to serve the public interest.
                </p>
                <button className="flex items-center gap-2 text-neutral-900 font-semibold hover:gap-3 transition-all">
                  Find Out More
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News/Insights Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-neutral-900">
                Latest Insights
              </h2>
              <p className="text-neutral-600">
                Recent research and analysis from our team
              </p>
            </div>
            <button className="text-neutral-900 font-semibold hover:text-orange-500 transition-colors flex items-center gap-1">
              View All <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 hover:border-orange-400 cursor-pointer group"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {news.image}
                </div>
                <div className="p-6">
                  <span className="text-orange-600 text-xs font-semibold uppercase tracking-wider">
                    {news.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-3 mb-3 group-hover:text-orange-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Divisions Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3 text-neutral-900">
              Our Research Divisions
            </h2>
            <p className="text-lg text-neutral-600">
              NORC's broad research expertise allows us to study almost every
              aspect of the human experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchDivisions.map((division, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="mb-4 text-neutral-900 group-hover:text-orange-500 transition-colors">
                  {division.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 group-hover:text-orange-600 transition-colors">
                  {division.title}
                </h3>
                <p className="text-neutral-600">{division.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Solutions</h2>
            <p className="text-lg text-gray-300">
              Specialized research platforms and services for organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'AmeriSpeak',
              'AmplifyAAPI',
              'AP-NORC',
              'Data Enclave',
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-lg p-6 hover:bg-orange-500 transition-colors cursor-pointer group"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {solution}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-neutral-900">
                  Specialized research solutions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-neutral-900">
            Research You Can Trust
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            With decades of experience in scientific research and data
            collection, we have earned the trust of government agencies,
            academic institutions, and organizations worldwide.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">75+</div>
              <p className="text-neutral-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1000+</div>
              <p className="text-neutral-600">Research Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <p className="text-neutral-600">Sectors Served</p>
            </div>
          </div>
        </div>
      </section>

      <SparkStatement />

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Contact our team to discuss your research needs or learn more about
            our services.
          </p>
          <button className="px-8 py-3 text-white font-semibold rounded-lg bg-neutral-900 hover:bg-black transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}
