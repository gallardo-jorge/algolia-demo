import { ChevronRight } from 'lucide-react'

export function HomeHeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">
            Delivering Objective Insights
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-700">
            We deliver objective, nonpartisan insights and analysis that
            decision-makers trust. Our research informs the most important
            decisions affecting society.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <button className="rounded-lg bg-neutral-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-black">
              Explore Our Research
            </button>
            <button className="rounded-lg border-2 border-neutral-900 px-8 py-3 font-semibold text-neutral-900 transition-colors hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="flex h-64 items-center justify-center overflow-hidden bg-gray-200 md:h-full">
              <img
                src="https://s7d1.scene7.com/is/image/norc/State-Agency-GenAI-EV-Homepage:desktopHome"
                alt="State Agency GenAI Research"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-600">
                Featured Research
              </span>
              <h3 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">
                How State Agencies Can Responsibly Use AI
              </h3>
              <p className="mb-6 text-neutral-600">
                Our latest research explores how government agencies can
                implement artificial intelligence responsibly and effectively
                to serve the public interest.
              </p>
              <button className="flex items-center gap-2 font-semibold text-neutral-900 transition-all hover:gap-3">
                Find Out More
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
