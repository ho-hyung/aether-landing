import NavBar from '@/components/nav-bar'
import HeroSection from '@/components/hero-section'
import CinematicVideo from '@/components/cinematic-video'
import FeatureExpression from '@/components/feature-expression'
import EmotionSharing from '@/components/emotion-sharing'
import ConnectionDiagram from '@/components/connection-diagram'
import CoreFeatures from '@/components/core-features'
import Testimonials from '@/components/testimonials'
import FAQSection from '@/components/faq-section'
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
  datePublished: '2025-03-01',
  dateModified: '2026-03-26',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'AETHER는 어떤 앱인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AETHER는 입자 물리학에서 영감을 받은 감정 표현 앱입니다. 화면을 터치하면 감정이 물리 법칙을 따르는 입자로 변환되어 시각화됩니다. 기쁨, 슬픔, 분노, 평온, 사랑 등 5가지 감정을 각각 고유한 색상과 움직임의 입자로 표현할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: 'AETHER는 무료인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AETHER는 무료로 다운로드하여 사용할 수 있습니다. 현재 Google Play에서 Android 버전을 제공하고 있으며, iOS(App Store) 버전은 준비 중입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '어떤 기기에서 사용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '현재 Android 기기에서 사용할 수 있으며, Google Play 스토어에서 다운로드할 수 있습니다. iOS 버전은 곧 출시 예정입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '감정 공유 기능은 어떻게 작동하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '소중한 사람과 감정 궤도를 연결하면, 서로의 감정 상태를 실시간으로 확인할 수 있습니다. 상대방이 강한 감정을 느낄 때 부드러운 알림을 받아, 멀리 있어도 곁에 있는 느낌을 전할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '사운드스케이프 기능이란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '사운드스케이프는 감정의 파동을 소리로 변환하는 기능입니다. 기쁨은 밝은 멜로디로, 슬픔은 깊은 앰비언트 사운드로 표현됩니다. 하루 동안 기록된 감정이 만드는 유일한 사운드트랙을 감상하며 명상이나 회고에 활용할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '개인정보는 안전한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '감정 데이터는 연결된 사람에게만 공개되는 프라이빗 스페이스에서 관리됩니다. 사용자가 직접 공유 대상을 선택할 수 있으며, 원하지 않는 상대에게는 감정 데이터가 노출되지 않습니다.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />
      <StarBackground />
      <div className="relative z-10">
        <HeroSection />
        <CinematicVideo />
        <FeatureExpression />
        <EmotionSharing />
        <ConnectionDiagram />
        <CoreFeatures />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </div>
    </main>
  )
}
