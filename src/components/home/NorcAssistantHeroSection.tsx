import { useNavigate } from '@tanstack/react-router'
import { AskNorcDialog } from './AskNorcDialog'

export function NorcAssistantHeroSection() {
  const navigate = useNavigate()

  const handleAsk = async (prompt: string) => {
    await navigate({
      to: '/askNORC',
      search: { q: prompt },
    })
  }

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

          <div className="mt-6">
            <button
              type="button"
              onClick={() => navigate({ to: '/NORCagent' })}
              className="rounded-full border border-orange-300/70 bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-orange-200 hover:bg-orange-400"
            >
              Try AskNORC
            </button>
          </div>
        </div>

        <AskNorcDialog
          showSuggestions
          onAsk={handleAsk}
        />
      </div>
    </section>
  )
}
