export type MockResponse = {
  title: string
  summary: string
  points: string[]
}

export type Division =
  | 'All'
  | 'Health'
  | 'Education'
  | 'Economics'
  | 'Society & Culture'
  | 'Research Science'
  | 'Global'
  | 'Public Affairs'

export type ContentType = 'Project' | 'Brief' | 'Report'
export type ProjectStatus = 'Complete' | 'Active'
export type FacetGroupKey =
  | 'departments'
  | 'services'
  | 'solutions'
  | 'collections'
  | 'newsOutlet'

export type SearchResultItem = {
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

export const askNorcSuggestions = [
  'How is AI changing the way public agencies deliver services?',
  'What are best practices for responsible AI procurement in government?',
  'Has NORC published findings on trust in AI-generated information?',
  'What guidelines support transparent AI use in public decision-making?',
  'What does NORC research say about measuring AI impact over time?',
]

export const divisionFilters: Division[] = [
  'All',
  'Health',
  'Education',
  'Economics',
  'Society & Culture',
  'Research Science',
  'Global',
  'Public Affairs',
]

export const topicFacets = [
  'AI governance',
  'Trust & transparency',
  'Service delivery',
  'Program evaluation',
]

export const contentTypeFacets: ContentType[] = ['Project', 'Brief', 'Report']

export const statusFacets: Array<'All' | ProjectStatus> = ['All', 'Complete', 'Active']

export const facetGroups: Array<{
  key: FacetGroupKey
  label: string
  options: string[]
}> = [
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

export const mockSearchResults: SearchResultItem[] = [
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

export const mockResponses: Record<string, MockResponse> = {
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

export const defaultResponse: MockResponse = {
  title: 'AskNORC Mock Response',
  summary:
    'This preview shows how AskNORC responses can be presented in a structured, readable format while the full data-backed experience is being integrated.',
  points: [
    'The question is captured from the dialog and used to drive the response layout.',
    'Response framing follows the same dark visual language as the homepage assistant surface.',
    'Typography is intentionally larger to improve readability during longer answer review.',
  ],
}
