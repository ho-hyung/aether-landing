'use client'

import Image from 'next/image'
import ScrollAnimation from './scroll-animation'

const relationships = [
  {
    title: '부모 ↔ 자녀',
    description: '말로 전하지 못한 마음을 입자로 전달하세요.',
    icon: '👨‍👧',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accentColor: '#00E5FF',
  },
  {
    title: '연인',
    description: '서로의 감정 궤도를 공유하며 더 깊이 연결되세요.',
    icon: '💑',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accentColor: '#EC4899',
  },
  {
    title: '부부',
    description: '일상 속 감정의 파동을 함께 느껴보세요.',
    icon: '💍',
    gradient: 'from-purple-500/20 to-violet-500/20',
    accentColor: '#A855F7',
  },
  {
    title: '친구',
    description: '우주를 공유하는 특별한 친구 관계를 만드세요.',
    icon: '🤝',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentColor: '#34D399',
  },
]

export default function EmotionSharing() {
  return (
    <section className="relative px-5 py-16 sm:px-6 md:py-32">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <ScrollAnimation>
            <p
              className="mb-4 text-sm font-medium tracking-widest text-aether-purple"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              EMOTIONAL SHARING
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="mb-4 text-[1.5rem] font-bold leading-tight sm:text-2xl md:mb-6 md:text-4xl lg:text-5xl">
              말하지 못한 마음,
              <br />
              <span className="text-gradient-cyan">우주로 전합니다</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="mx-auto max-w-lg text-base text-aether-muted md:text-lg">
              소중한 사람과 감정의 궤도를 연결하세요.
              <br />
              당신의 우주가 누군가에게 닿는 순간을 경험하세요.
            </p>
          </ScrollAnimation>
        </div>

        {/* Two planets image + quote */}
        <ScrollAnimation delay={0.15}>
          <div className="glass-card gradient-border mx-auto mb-16 max-w-3xl overflow-hidden rounded-2xl">
            {/* Image */}
            <div className="relative">
              <Image
                src="/images/emotion-sharing.png"
                alt="감정으로 연결된 두 개의 행성"
                width={1344}
                height={768}
                className="h-auto w-full"
              />
              {/* Bottom gradient overlay for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B1A] to-transparent" />
            </div>

            <div className="px-6 pb-6 pt-2 text-center sm:px-8 sm:pb-8 md:px-12 md:pb-12">
              <blockquote className="text-base font-light italic text-aether-text/80 sm:text-lg md:text-xl">
                &ldquo;감정은 혼자 느끼는 것이 아니라,
                <br />
                함께 공명하는 파동입니다.&rdquo;
              </blockquote>
            </div>
          </div>
        </ScrollAnimation>

        {/* Relationship Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {relationships.map((rel, i) => (
            <ScrollAnimation key={rel.title} delay={0.1 * i}>
              <div className="glass-card gradient-border group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] md:p-8">
                {/* Icon with glow */}
                <div className="relative mb-4">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${rel.gradient}`}
                  >
                    <span className="text-2xl">{rel.icon}</span>
                  </div>
                  {/* Subtle glow behind icon */}
                  <div
                    className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `${rel.accentColor}15` }}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{rel.title}</h3>
                <p className="text-sm leading-relaxed text-aether-muted">
                  {rel.description}
                </p>
                {/* Decorative wave line */}
                <svg className="mt-4 w-full" height="12" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path
                    d="M0 6 Q25 0 50 6 T100 6 T150 6 T200 6"
                    fill="none"
                    stroke={rel.accentColor}
                    strokeWidth="0.8"
                    strokeOpacity="0.2"
                  />
                </svg>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
