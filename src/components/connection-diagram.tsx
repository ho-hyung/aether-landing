'use client'

import Image from 'next/image'
import ScrollAnimation from './scroll-animation'

const features = [
  {
    title: '감정 궤도 공유',
    description:
      '서로의 감정 상태를 실시간으로 확인하고, 입자의 색과 움직임으로 상대방의 마음을 느껴보세요.',
    color: '#00E5FF',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
  },
  {
    title: '프라이빗 스페이스',
    description:
      '연결된 사람에게만 공개되는 안전한 감정 공간. 나만의 우주를 선택한 사람과 나누세요.',
    color: '#A855F7',
    iconPath: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
  },
  {
    title: '감정 공명 알림',
    description:
      '상대방이 강한 감정을 느낄 때 부드러운 알림을 받아보세요. 멀리 있어도 곁에 있는 느낌.',
    color: '#EC4899',
    iconPath: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
  },
]

export default function ConnectionDiagram() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 40%, rgba(0, 229, 255, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:gap-16">
          {/* Orbit System Image */}
          <ScrollAnimation direction="left" className="flex-1">
            <div className="relative mx-auto w-full max-w-[480px]">
              {/* Glow behind image */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-aether-cyan/[0.06] via-transparent to-aether-purple/[0.04] blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/orbit-system.png"
                  alt="감정 궤도 시스템 - 행성들이 궤도를 따라 회전하는 모습"
                  width={1024}
                  height={1024}
                  className="h-auto w-full saturate-[0.6] brightness-[0.7]"
                />
                {/* Desaturate + cool color shift to cyan/purple palette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aether-cyan/20 via-[#0B0B1A]/30 to-aether-purple/20 mix-blend-overlay" />
                {/* Heavy vignette to blend edges */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_40px_rgba(11,11,26,0.8)]" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Feature Cards */}
          <div className="flex flex-1 flex-col gap-4 md:gap-6">
            {features.map((feature, i) => (
              <ScrollAnimation key={feature.title} delay={0.1 * i} direction="right">
                <div className="glass-card gradient-border group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01]">
                  <div className="flex gap-4">
                    {/* Icon with rich background */}
                    <div className="shrink-0">
                      <div
                        className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ background: `${feature.color}10` }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill={feature.color} fillOpacity="0.8">
                          <path d={feature.iconPath} />
                        </svg>
                        {/* Subtle glow */}
                        <div
                          className="pointer-events-none absolute -inset-1 -z-10 rounded-xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: `${feature.color}20` }}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-base font-semibold md:text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-aether-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
