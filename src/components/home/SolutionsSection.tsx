import { solutions } from '../../data/home'

export function SolutionsSection() {
  return (
    <section className="bg-neutral-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold">Our Solutions</h2>
          <p className="text-lg text-gray-300">
            Specialized research platforms and services for organizations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution}
              className="group cursor-pointer rounded-lg bg-neutral-800 p-6 transition-colors hover:bg-orange-500"
            >
              <h3 className="mb-2 text-lg font-semibold">{solution}</h3>
              <p className="text-sm text-gray-300 group-hover:text-neutral-900">
                Specialized research solutions
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
