import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AskNorcDialog } from '../components/home/AskNorcDialog'

type MockResponse = {
  title: string
  summary: string
  points: string[]
}

type Division =
  | 'All'
  | 'Health'
  | 'Education'
  | 'Economics'
  | 'Society & Culture'
  | 'Research Science'
  | 'Global'
  | 'Public Affairs'

type ContentType = 'Project' | 'Brief' | 'Report'
type ProjectStatus = 'Complete' | 'Active'
type FacetGroupKey =
  | 'departments'
  | 'services'
  | 'solutions'
  | 'collections'
  | 'newsOutlet'

type SearchResultItem = {
  id: string
  title: string
  summary: string
  client: string
  division: Exclude<Division, 'All'>
  contentType: ContentType
  status: ProjectStatus
  topics: string[]
  departments: string[]
  services: string[]
  solutions: string[]
  collections: string[]
  newsOutlet: string[]
}

const divisionFilters: Division[] = [
  'All',
  'Health',
  'Education',
  'Economics',
  'Society & Culture',
  'Research Science',
  'Global',
  'Public Affairs',
]

const topicFacets = [
  'AI governance',
  'Trust & transparency',
  'Service delivery',
  'Program evaluation',
]

const contentTypeFacets: ContentType[] = ['Project', 'Brief', 'Report']

const statusFacets: Array<'All' | ProjectStatus> = ['All', 'Complete', 'Active']

const facetGroups: Array<{ key: FacetGroupKey; label: string; options: string[] }> = [
  {
    key: 'departments',
    label: 'Departments & Centers',
    options: ['Health Policy', 'Education Lab', 'Economic Research', 'Public Affairs'],
  },
  {
    key: 'services',
    label: 'Services',
    options: ['Survey Design', 'Program Evaluation', 'Data Engineering', 'Policy Analysis'],
  },
  {
    key: 'solutions',
    label: 'Solutions',
    options: ['AmeriSpeak', 'Data Enclave', 'Rapid Insight Sprint'],
  },
  {
    key: 'collections',
    label: 'Collections',
    options: ['Case Studies', 'Methods', 'Implementation Guides'],
  },
  {
    key: 'newsOutlet',
    label: 'News Outlet',
    options: ['NORC Insights', 'AP-NORC', 'External Press'],
  },
]

const mockSearchResults: SearchResultItem[] = [
  {
    id: 'res-1',
    title: 'Testing Violence Prevention Messages & Materials',
    summary:
      "Supporting CDC's efforts to improve resources for parents and anti-violence practitioners through evidence-based messaging.",
    client:
      'Centers for Disease Control and Prevention, Division of Violence Prevention',
    division: 'Health',
    contentType: 'Project',
    status: 'Complete',
    topics: ['Service delivery', 'Program evaluation'],
    departments: ['Health Policy'],
    services: ['Program Evaluation', 'Survey Design'],
    solutions: ['AmeriSpeak'],
    collections: ['Case Studies'],
    newsOutlet: ['NORC Insights'],
  },
  {
    id: 'res-2',
    title: 'Responsible AI Procurement Playbook for State Agencies',
    summary:
      'A practical procurement framework covering risk controls, vendor accountability, and audit-readiness for AI systems.',
    client: 'State CIO Collaborative',
    division: 'Public Affairs',
    contentType: 'Brief',
    status: 'Active',
    topics: ['AI governance', 'Trust & transparency'],
    departments: ['Public Affairs'],
    services: ['Policy Analysis'],
    solutions: ['Rapid Insight Sprint'],
    collections: ['Implementation Guides'],
    newsOutlet: ['External Press'],
  },
  {
    id: 'res-3',
    title: 'Model Cards in Public Programs: Transparency Benchmarks',
    summary:
      'Assessment of model documentation standards and resident-facing disclosure language across municipal deployments.',
    client: 'Urban Innovation Partnership',
    division: 'Research Science',
    contentType: 'Report',
    status: 'Complete',
    topics: ['Trust & transparency', 'AI governance'],
    departments: ['Economic Research'],
    services: ['Data Engineering', 'Program Evaluation'],
    solutions: ['Data Enclave'],
    collections: ['Methods'],
    newsOutlet: ['AP-NORC'],
  },
  {
    id: 'res-4',
    title: 'Longitudinal AI Impact Tracking in Workforce Services',
    summary:
      'Tracks service quality, throughput, and equity outcomes over multi-year AI implementation cycles.',
    client: 'Workforce Development Consortium',
    division: 'Economics',
    contentType: 'Project',
    status: 'Active',
    topics: ['Program evaluation', 'Service delivery'],
    departments: ['Economic Research'],
    services: ['Program Evaluation'],
    solutions: ['Rapid Insight Sprint'],
    collections: ['Implementation Guides'],
    newsOutlet: ['NORC Insights'],
  },
  {
    id: 'res-5',
    title: 'Public Trust Signals for AI-Generated Information',
    summary:
      'Mixed-method research on what drives confidence in generated content across demographic and language groups.',
    client: 'NORC Public Opinion Program',
    division: 'Society & Culture',
    contentType: 'Report',
    status: 'Complete',
    topics: ['Trust & transparency'],
    departments: ['Public Affairs'],
    services: ['Policy Analysis', 'Survey Design'],
    solutions: ['AmeriSpeak'],
    collections: ['Case Studies'],
    newsOutlet: ['AP-NORC'],
  },
  {
    id: 'res-6',
    title: 'AI Literacy Toolkit for K-12 District Leadership',
    summary:
      'Design and validation of administrator-ready resources for responsible classroom AI deployment.',
    client: 'Midwest Education Collaborative',
    division: 'Education',
    contentType: 'Project',
    status: 'Active',
    topics: ['AI governance', 'Service delivery'],
    departments: ['Education Lab'],
    services: ['Policy Analysis', 'Program Evaluation'],
    solutions: ['Rapid Insight Sprint'],
    collections: ['Implementation Guides'],
    newsOutlet: ['NORC Insights'],
  },
  {
    id: 'res-7',
    title: 'Cross-National Benchmarks for Public Sector AI Readiness',
    summary:
      'Comparative evidence on institutional readiness, procurement maturity, and transparency practices.',
    client: 'Global Governance Forum',
    division: 'Global',
    contentType: 'Report',
    status: 'Complete',
    topics: ['AI governance', 'Trust & transparency'],
    departments: ['Economic Research'],
    services: ['Data Engineering', 'Policy Analysis'],
    solutions: ['Data Enclave'],
    collections: ['Methods'],
    newsOutlet: ['External Press'],
  },
  {
    id: 'res-8',
    title: 'Public Narrative Testing for Emerging Technology Programs',
    summary:
      'Audience segmentation and message testing to improve trust in AI-enabled government services.',
    client: 'City Civic Innovation Office',
    division: 'Society & Culture',
    contentType: 'Brief',
    status: 'Complete',
    topics: ['Trust & transparency', 'Service delivery'],
    departments: ['Public Affairs'],
    services: ['Survey Design', 'Policy Analysis'],
    solutions: ['AmeriSpeak'],
    collections: ['Case Studies'],
    newsOutlet: ['AP-NORC'],
  },
]

const mockResponses: Record<string, MockResponse> = {
  'how is ai changing the way public agencies deliver services?': {
    title: 'AI in Public Service Delivery',
    summary:
      'AI is helping agencies reduce wait times, improve case triage, and personalize service pathways while keeping humans in decision-critical roles.',
    points: [
      'Intake automation can route residents to the right program faster, especially for high-volume channels like eligibility and benefits questions.',
      'Predictive service operations can identify where delays or errors are likely and trigger earlier intervention from frontline teams.',
      'Agencies that perform best typically pair AI tools with transparent escalation policies, accessibility standards, and continuous auditing.',
    ],
  },
  'what are best practices for responsible ai procurement in government?': {
    title: 'Responsible AI Procurement',
    summary:
      'Strong procurement frameworks treat AI as an accountable public service capability, not just a software purchase.',
    points: [
      'Require vendors to document training data provenance, known model limitations, and expected failure modes before award.',
      'Include measurable governance terms in contracts, such as audit rights, bias testing cadence, and incident response timelines.',
      'Use phased implementation with pilot checkpoints so agencies can validate outcomes, equity impacts, and public trust signals before scaling.',
    ],
  },
  'has norc published findings on trust in ai-generated information?': {
    title: 'Trust in AI-Generated Information',
    summary:
      'NORC-style findings generally show trust is context-dependent: confidence increases when users understand source quality, methods, and oversight.',
    points: [
      'People are more likely to trust generated outputs when citations and clear source attribution are visible in the experience.',
      'Trust declines when systems appear overconfident, opaque, or inconsistent across demographic and language groups.',
      'Human review and communication clarity remain key factors for maintaining confidence in high-stakes domains.',
    ],
  },
  'what guidelines support transparent ai use in public decision-making?': {
    title: 'Transparency Guidelines for Public Decisions',
    summary:
      'Transparent public-sector AI programs define where AI is used, how outcomes are evaluated, and when people can contest decisions.',
    points: [
      'Publish plain-language model cards describing purpose, input data, boundaries, and documented limitations.',
      'Maintain decision logs and audit trails that separate automated recommendations from final human determinations.',
      'Provide resident-facing appeal and correction paths so affected people can request review or data fixes.',
    ],
  },
  'what does norc research say about measuring ai impact over time?': {
    title: 'Measuring AI Impact Over Time',
    summary:
      'Longitudinal AI evaluation combines efficiency metrics with equity, quality, and trust indicators to avoid one-dimensional success claims.',
    points: [
      'Track baseline-to-post metrics for cost, processing time, and service quality with consistent measurement windows.',
      'Monitor distributional effects by population segment to detect whether improvements are broadly shared.',
      'Use periodic mixed-method reviews that combine operational data with resident and staff feedback.',
    ],
  },
}

const defaultResponse: MockResponse = {
  title: 'AskNORC Mock Response',
  summary:
    'This preview shows how AskNORC responses can be presented in a structured, readable format while the full data-backed experience is being integrated.',
  points: [
    'The question is captured from the dialog and used to drive the response layout.',
    'Response framing follows the same dark visual language as the homepage assistant surface.',
    'Typography is intentionally larger to improve readability during longer answer review.',
  ],
}

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
  }, [activeDivision, activeFacetFilters, activeStatus, activeTopics, activeType, q])

  const handleAsk = async (prompt: string) => {
    await navigate({
      to: '/askNORC',
      search: { q: prompt },
    })
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
