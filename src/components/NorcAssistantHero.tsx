import { Search } from 'lucide-react'

const suggestions = [
  'How is AI changing the way public agencies deliver services?',
  'What are best practices for responsible AI procurement in government?',
  'Has NORC published findings on trust in AI-generated information?',
  'What guidelines support transparent AI use in public decision-making?',
  'What does NORC research say about measuring AI impact over time?',
]

export function NorcAssistantHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950 px-4 pb-10 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
      <img
        src="https://s7d1.scene7.com/is/image/norc/State-Agency-GenAI-EV-Homepage:desktopHome"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24px_24px,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_3px,transparent_4px)] bg-[length:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-800/30 via-neutral-950/90 to-neutral-950" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-400">
            AskNORC AI Assistant
          </p>
          <h1 className="font-['Georgia'] text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            AskNORC
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg">
            An AI-powered research assistant that builds on your conversation,
            pulling insights from NORC reports, briefs, surveys, and public datasets.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          <div className="border-b border-neutral-800 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              AskNORC Suggestions
            </p>
            <ul className="mt-3 space-y-2">
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-neutral-300"
                >
                  <Search className="mt-0.5 h-3.5 w-3.5 text-neutral-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-3 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors">
              View More
            </button>
          </div>

          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2 rounded-full bg-white p-1.5">
              <input
                type="text"
                readOnly
                value="What can we help you with?"
                className="w-full bg-transparent px-3 py-2 text-sm text-neutral-500 outline-none"
                aria-label="Prompt input preview"
              />
              <button className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
