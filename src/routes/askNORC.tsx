import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ChevronDown, Send, SlidersHorizontal } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { AskNorcDialog } from '../components/home/AskNorcDialog'
import {
  contentTypeFacets,
  defaultResponse,
  divisionFilters,
  facetGroups,
  mockResponses,
  mockSearchResults,
  statusFacets,
  topicFacets,
  type ContentType,
  type Division,
  type FacetGroupKey,
  type ProjectStatus,
} from '../data/asknorc'

export const Route = createFileRoute('/askNORC')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === 'string' ? search.q : '',
  }),
  component: AskNorcPage,
})

function AskNorcPage() {
  const navigate = useNavigate()
  const { q } = Route.useSearch()
  const [activeDivision, setActiveDivision] = useState<Division>('All')
  const [activeTopics, setActiveTopics] = useState<string[]>([])
  const [activeType, setActiveType] = useState<ContentType | 'All'>('All')
  const [activeStatus, setActiveStatus] = useState<'All' | ProjectStatus>('All')
  const [activeFacetFilters, setActiveFacetFilters] = useState<Record<FacetGroupKey, string[]>>({
    departments: [],
    services: [],
    solutions: [],
    collections: [],
    newsOutlet: [],
  })

  const normalizedQuestion = q.trim().toLowerCase()
  const response = mockResponses[normalizedQuestion] ?? defaultResponse

  const filteredResults = useMemo(() => {
    return mockSearchResults.filter((item) => {
      const matchesDivision =
        activeDivision === 'All' || item.division === activeDivision
      const matchesStatus = activeStatus === 'All' || item.status === activeStatus
      const matchesType = activeType === 'All' || item.contentType === activeType
      const matchesTopics =
        activeTopics.length === 0 ||
        activeTopics.every((topic) => item.topics.includes(topic))
      const matchesFacetGroups = facetGroups.every((group) => {
        const selectedValues = activeFacetFilters[group.key]

        if (!selectedValues.length) {
          return true
        }

        return selectedValues.every((value) => item[group.key].includes(value))
      })

      return (
        matchesDivision &&
        matchesStatus &&
        matchesType &&
        matchesTopics &&
        matchesFacetGroups
      )
    })
  }, [activeDivision, activeFacetFilters, activeStatus, activeTopics, activeType])

  const [agentPrompt, setAgentPrompt] = useState('')
  const agentInputRef = useRef<HTMLInputElement>(null)

  const handleAsk = async (prompt: string) => {
    await navigate({
      to: '/askNORC',
      search: { q: prompt },
    })
  }

  const handleAgentAsk = () => {
    const trimmed = agentPrompt.trim()
    if (!trimmed) {
      agentInputRef.current?.focus()
      return
    }
    navigate({ to: '/NORCagent' })
  }

  const toggleFacet = (groupKey: FacetGroupKey, value: string) => {
    setActiveFacetFilters((current) => {
      const values = current[groupKey]
      return {
        ...current,
        [groupKey]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      }
    })
  }

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

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-400">
            AskNORC AI Assistant
          </p>
          <h1 className="font-['Georgia'] text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            AskNORC
          </h1>
        </div>

        <AskNorcDialog
          initialPrompt={q}
          showSuggestions={false}
          onAsk={handleAsk}
        />

        <article className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
            Prompt Response
          </p>

          <h2 className="mt-3 font-['Georgia'] text-3xl leading-tight text-white sm:text-4xl">
            {response.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-neutral-200 sm:text-lg">
            {response.summary}
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-orange-300">
            {response.points.map((point) => (
              <li key={point} className="text-base leading-relaxed text-neutral-100 sm:text-lg">
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-neutral-800 pt-6 flex gap-3">
            <input
              ref={agentInputRef}
              type="text"
              value={agentPrompt}
              onChange={(e) => setAgentPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAgentAsk()}
              placeholder="Ask the NORC AI Agent…"
              className="min-w-0 flex-1 rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40"
            />
            <button
              type="button"
              onClick={handleAgentAsk}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-orange-500 bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 active:bg-orange-700"
            >
              <Send className="h-4 w-4" />
              Ask
            </button>
          </div>
        </article>

        <article className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-950/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
            Search Results
          </p>

          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-200">Filter by Division</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
              {divisionFilters.map((division) => {
                const isActive = activeDivision === division
                return (
                  <button
                    key={division}
                    type="button"
                    onClick={() => setActiveDivision(division)}
                    className={`rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-orange-500 bg-orange-600 text-white'
                        : 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-neutral-500'
                    }`}
                  >
                    {division}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-neutral-800 pt-6 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                <SlidersHorizontal className="h-4 w-4 text-orange-300" />
                <span>Faceted Filters</span>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">Topics</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topicFacets.map((topic) => {
                      const isActive = activeTopics.includes(topic)
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => {
                            setActiveTopics((current) =>
                              current.includes(topic)
                                ? current.filter((item) => item !== topic)
                                : [...current, topic],
                            )
                          }}
                          className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                            isActive
                              ? 'border-orange-500 bg-orange-600 text-white'
                              : 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-neutral-500'
                          }`}
                        >
                          {topic}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">Content Type</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveType('All')}
                      className={`rounded-xl border px-3 py-1.5 text-xs transition-colors ${
                        activeType === 'All'
                          ? 'border-orange-500 bg-orange-600 text-white'
                          : 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-neutral-500'
                      }`}
                    >
                      All Types
                    </button>
                    {contentTypeFacets.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setActiveType(type)}
                        className={`rounded-xl border px-3 py-1.5 text-xs transition-colors ${
                          activeType === type
                            ? 'border-orange-500 bg-orange-600 text-white'
                            : 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-neutral-500'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">Project Status</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {statusFacets.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setActiveStatus(status)}
                        className={`rounded-xl border px-3 py-1.5 text-xs transition-colors ${
                          activeStatus === status
                            ? 'border-orange-500 bg-orange-600 text-white'
                            : 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-neutral-500'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {facetGroups.map((group) => (
                  <div key={group.key}>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">{group.label}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.options.map((option) => {
                        const isActive = activeFacetFilters[group.key].includes(option)
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleFacet(group.key, option)}
                            className={`rounded-xl border px-3 py-1.5 text-xs transition-colors ${
                              isActive
                                ? 'border-orange-500 bg-orange-600 text-white'
                                : 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-neutral-500'
                            }`}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-200"
                  >
                    Viewing {filteredResults.length} of {mockSearchResults.length}
                    <ChevronDown className="h-4 w-4 text-orange-300" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-200"
                  >
                    Sort: Relevance
                    <ChevronDown className="h-4 w-4 text-orange-300" />
                  </button>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {filteredResults.length ? (
                  filteredResults.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                        <span className="font-semibold text-orange-300">{item.contentType}</span>
                        <span className="rounded-full border border-neutral-700 px-3 py-1 text-neutral-200">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-neutral-200 sm:text-lg">
                        {item.summary}
                      </p>
                      <p className="mt-3 text-sm text-neutral-300">
                        <span className="font-semibold text-neutral-100">Client: </span>
                        {item.client}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-neutral-700 bg-neutral-800/80 px-3 py-1 text-xs uppercase tracking-wide text-neutral-200">
                          {item.division}
                        </span>
                        {item.topics.map((topic) => (
                          <span
                            key={`${item.id}-${topic}`}
                            className="rounded-full border border-neutral-700 bg-neutral-800/80 px-3 py-1 text-xs text-neutral-200"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 text-neutral-200">
                    No results match your current filter combination. Try broadening division, topic, or status.
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
