import HeroSection from '@/components/hero-section'
import CinematicVideo from '@/components/cinematic-video'
import FeatureExpression from '@/components/feature-expression'
import EmotionSharing from '@/components/emotion-sharing'
import ConnectionDiagram from '@/components/connection-diagram'
import CoreFeatures from '@/components/core-features'
import Testimonials from '@/components/testimonials'
import FinalCTA from '@/components/final-cta'
import StarBackground from '@/components/star-background'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AETHER',
  alternateName: '에테르',
  description:
    '당신의 감정은 먼지가 아니라, 별이 됩니다. 입자 물리학에서 영감을 받은 감정 표현 앱.',
  url: 'https://aether-page.vercel.app',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
  installUrl:
    'https://play.google.com/store/apps/details?id=com.TeamAether.Aether',
  author: {
    '@type': 'Organization',
    name: 'Team Aether',
  },
  inLanguage: 'ko',
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
