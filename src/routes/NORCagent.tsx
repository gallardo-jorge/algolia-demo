import { createFileRoute } from '@tanstack/react-router'
import { Bot, Send, Sparkles, X, Zap } from 'lucide-react'

const conversationHistory = [
  'AI governance in state age...',
  'AmeriSpeak panel methodology',
  'Health equity research find...',
  'K-12 AI literacy toolkit...',
  'Trust in AI-generated info...',
  'Responsible AI procurement',
  'Public opinion on climate p...',
  'Program evaluation methods...',
]

const researchSuggestions = [
  'How is AI changing the way public agencies deliver services?',
  'What are NORC\'s findings on trust in AI-generated information?',
  'What does NORC research say about health equity outcomes?',
]

const methodsSuggestions = [
  'How does the AmeriSpeak panel ensure representative samples?',
  'What survey design best practices does NORC recommend?',
  'How does NORC approach program evaluation for federal clients?',
]

const solutionsSuggestions = [
  'What is the Data Enclave and how can I access it?',
  'How does the Rapid Insight Sprint work?',
  'What research divisions does NORC operate?',
]

export const Route = createFileRoute('/NORCagent')({
  component: NorcAgentPage,
})

function NorcAgentPage() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950 px-4 pb-16 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
      <img
        src="https://s7d1.scene7.com/is/image/norc/State-Agency-GenAI-EV-Homepage:desktopHome"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24px_24px,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_3px,transparent_4px)] bg-[length:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-800/30 via-neutral-950/90 to-neutral-950" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-400">
            AskNORC AI Assistant
          </p>
          <h1 className="font-['Georgia'] text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            AskNORC
          </h1>
        </div>

        <div className="overflow-hidden rounded-3xl border border-neutral-800 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-end gap-3 border-b border-neutral-800 bg-neutral-950/90 px-6 py-4 sm:px-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/70 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500"
            >
              #asknorcai
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              <span className="text-lg leading-none">+</span>
              New conversation
            </button>
          </div>

          <div className="grid min-h-[640px] lg:grid-cols-[260px_1fr]">
            <aside className="border-r border-neutral-800 bg-neutral-950/80 px-4 py-5">
              <button
                type="button"
                className="mb-3 flex w-full items-center justify-between rounded-xl border border-orange-500 bg-orange-600 px-4 py-3 text-left text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500"
              >
                <span>New conversation</span>
                <X className="h-4 w-4" />
              </button>

              <ul className="space-y-2">
                {conversationHistory.map((conversation) => (
                  <li key={conversation}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/70 px-3 py-2 text-left text-[15px] text-neutral-200 transition hover:border-neutral-600 hover:bg-neutral-800/80"
                    >
                      <span className="truncate">{conversation}</span>
                      <X className="h-3.5 w-3.5 shrink-0 text-neutral-500" />
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-neutral-700 bg-neutral-900/70 px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-neutral-500"
              >
                Load 10 more
              </button>
            </aside>

            <section className="bg-neutral-950/60 px-5 py-8 sm:px-7">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950/90 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-600/20 text-orange-400">
                    <Bot className="h-8 w-8" />
                  </div>

                  <div>
                    <h2 className="font-['Georgia'] text-3xl font-bold leading-tight text-white sm:text-[2.15rem]">
                    Hi, I&apos;m the AskNORC Assistant
                  </h2>
                  <p className="mt-3 max-w-4xl text-lg leading-relaxed text-neutral-300">
                    Ask me anything about NORC research, methodology, data solutions, or
                    our work across Health, Education, Economics, Public Affairs, and more.
                    I can surface findings, projects, and insights from across the organization.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-orange-500/30 bg-orange-600/10 px-4 py-3 text-orange-300">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="text-[15px] font-medium">
                    New! AskNORC now indexes the full project portfolio, AmeriSpeak methodology
                    documentation, and AP-NORC poll archive. Click to learn more.
                  </p>
                </div>

                <SuggestionGroup
                  title="Research & Findings"
                  items={researchSuggestions}
                />
                <SuggestionGroup title="Methods & Survey Design" items={methodsSuggestions} />
                <SuggestionGroup
                  title="Solutions & Data Access"
                  items={solutionsSuggestions}
                />

                <form className="mt-6 rounded-xl border border-neutral-700 bg-neutral-900/70 p-3 sm:p-4">
                  <label htmlFor="norc-agent-input" className="sr-only">
                    Ask AskNORC
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      id="norc-agent-input"
                      type="text"
                      placeholder="Ask AskNORC anything — research findings, methodology, data access, or expert guidance across NORC's divisions."
                      className="h-12 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-orange-500"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-orange-500 bg-orange-600 px-5 text-sm font-semibold text-white transition hover:bg-orange-500"
                    >
                      <Send className="h-4 w-4" />
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

function SuggestionGroup({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="mt-7">
      <div className="mb-3 flex items-center gap-2">
        <Zap className="h-4 w-4 text-orange-300" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className="rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-800/80"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  )
}
