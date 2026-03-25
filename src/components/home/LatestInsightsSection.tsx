import { ChevronRight } from 'lucide-react'
import { latestNews } from '../../data/home'

export function LatestInsightsSection() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-neutral-900">
              Latest Insights
            </h2>
            <p className="text-neutral-600">
              Recent research and analysis from our team
            </p>
          </div>
          <button className="flex items-center gap-1 font-semibold text-neutral-900 transition-colors hover:text-orange-500">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestNews.map((news) => (
            <div
              key={news.title}
              className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:border-orange-400 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-gray-100 text-5xl transition-transform group-hover:scale-105">
                {news.image}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {news.category}
                </span>
                <h3 className="mb-3 mt-3 text-lg font-bold text-neutral-900 transition-colors group-hover:text-orange-600">
                  {news.title}
                </h3>
                <p className="text-sm text-neutral-500">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
