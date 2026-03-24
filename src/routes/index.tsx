import { createFileRoute } from '@tanstack/react-router'
import { NorcAssistantHeroSection } from '../components/home/NorcAssistantHeroSection'
import { HomeHeroSection } from '../components/home/HomeHeroSection'
import { LatestInsightsSection } from '../components/home/LatestInsightsSection'
import { ResearchDivisionsSection } from '../components/home/ResearchDivisionsSection'
import { SolutionsSection } from '../components/home/SolutionsSection'
import { SparkStatementSection } from '../components/home/SparkStatementSection'
import { TrustStatementSection } from '../components/home/TrustStatementSection'
import { HomeCtaSection } from '../components/home/HomeCtaSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NorcAssistantHeroSection />

      <HomeHeroSection />
      <LatestInsightsSection />
      <ResearchDivisionsSection />
      <SolutionsSection />
      <TrustStatementSection />

      <SparkStatementSection />
      <HomeCtaSection />
    </div>
  )
}
