'use client'

import Image from 'next/image'
import ScrollAnimation from './scroll-animation'

const coreFeatures = [
  {
    title: 'Touch & Flow',
    subtitle: '감정의 입자 폭발',
    subtitleColor: '#00E5FF',
    image: '/images/particle-burst.png',
    description:
      '화면을 터치하는 순간, 감정이 물리 법칙을 따르는 입자로 변환됩니다. 터치의 강도, 속도, 패턴에 따라 전혀 다른 입자 반응이 펼쳐집니다.',
  },
  {
    title: 'Archive Orbit',
    subtitle: '감정의 궤도 기록',
    subtitleColor: '#A855F7',
    image: '/images/cosmic-flow.png',
    description:
      '매일의 감정이 행성처럼 궤도에 기록됩니다. 시간이 지나면 당신만의 감정 은하가 완성되고, 패턴을 통해 자신을 더 깊이 이해하게 됩니다.',
  },
  {
    title: 'Soundscape',
    subtitle: '감정의 사운드스케이프',
    subtitleColor: '#EC4899',
    image: '/images/soundscape.png',
    description:
      '감정의 파동이 소리가 됩니다. 기쁨은 밝은 멜로디로, 슬픔은 깊은 앰비언트로. 당신의 감정이 만드는 유일한 사운드트랙을 경험하세요.',
  },
]

export default function CoreFeatures() {
  return (
    <section className="relative px-5 py-16 sm:px-6 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-16">
          <ScrollAnimation>
            <p
              className="mb-4 text-sm font-medium tracking-widest text-aether-pink"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              CORE FEATURES
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="mb-4 text-[1.5rem] font-bold leading-tight sm:text-2xl md:text-4xl lg:text-5xl">
              경험의 시각화:
              <br />
              <span className="text-gradient-cyan">감정의 물리학</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="mx-auto max-w-lg text-base text-aether-muted md:text-lg">
              입자 물리학의 법칙으로 감정을 시각화, 기록, 청각화하는
              <br className="hidden md:block" />
              세 가지 핵심 기능을 만나보세요.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {coreFeatures.map((feature, i) => (
            <ScrollAnimation key={feature.title} delay={0.15 * i}>
              <div className="glass-card gradient-border group h-full rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={feature.image}
                    alt={feature.subtitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Color tint to unify palette & mask foreign branding */}
                  <div className="pointer-events-none absolute inset-0 bg-[#0B0B1A]/20" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-color"
                    style={{ background: feature.subtitleColor }}
                  />
                  {/* Top fade to hide any text in images */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0B0B1A]/60 to-transparent" />
                  {/* Bottom gradient for seamless card transition */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0B1A]/80 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3
                    className="mb-1 text-lg font-bold md:text-xl"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium" style={{ color: feature.subtitleColor }}>
                    {feature.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-aether-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
