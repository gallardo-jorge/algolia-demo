export const latestNews = [
  {
    title: 'How State Agencies Can Responsibly Use AI',
    category: 'Policy Analysis',
    date: 'March 2026',
    image: '📊',
  },
  {
    title: "Evaluating the World's First Under-16 Social Media Ban",
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

export const solutions = ['AmeriSpeak', 'AmplifyAAPI', 'AP-NORC', 'Data Enclave']

export type ResearchDivision = {
  icon: 'bar-chart' | 'book' | 'globe' | 'heart' | 'users' | 'trending-up'
  title: string
  description: string
}

export const researchDivisions: ResearchDivision[] = [
  {
    icon: 'bar-chart',
    title: 'Economics',
    description: 'Economic research and policy analysis',
  },
  {
    icon: 'book',
    title: 'Education',
    description: 'Educational outcomes and systems research',
  },
  {
    icon: 'globe',
    title: 'Global',
    description: 'International research initiatives',
  },
  {
    icon: 'heart',
    title: 'Health',
    description: 'Healthcare and public health research',
  },
  {
    icon: 'users',
    title: 'Public Affairs',
    description: 'Policy and public opinion research',
  },
  {
    icon: 'trending-up',
    title: 'Research Science',
    description: 'Advanced research methodologies',
  },
]
