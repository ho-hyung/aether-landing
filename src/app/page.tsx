import HeroSection from '@/components/hero-section'
import CinematicVideo from '@/components/cinematic-video'
import FeatureExpression from '@/components/feature-expression'
import EmotionSharing from '@/components/emotion-sharing'
import ConnectionDiagram from '@/components/connection-diagram'
import CoreFeatures from '@/components/core-features'
import Testimonials from '@/components/testimonials'
import FinalCTA from '@/components/final-cta'
import StarBackground from '@/components/star-background'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarBackground />
      <div className="relative z-10">
        <HeroSection />
        <CinematicVideo />
        <FeatureExpression />
        <EmotionSharing />
        <ConnectionDiagram />
        <CoreFeatures />
        <Testimonials />
        <FinalCTA />
      </div>
    </main>
  )
}
