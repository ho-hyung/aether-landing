'use client'

import Image from 'next/image'
import ScrollAnimation from './scroll-animation'

export default function FeatureExpression() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollAnimation>
              <p
                className="mb-4 text-sm font-medium tracking-widest text-aether-cyan"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                EMOTIONAL EXPRESSION
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <h2 className="mb-4 text-[1.5rem] font-bold leading-tight sm:text-2xl md:mb-6 md:text-4xl lg:text-5xl">
                말하지 않아도 돼요.
                <br />
                <span className="text-gradient-pink">그냥 터뜨리세요.</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <p className="mx-auto max-w-md text-base leading-relaxed text-aether-muted lg:mx-0 lg:text-lg">
                화면을 터치하면 감정이 입자로 폭발합니다.
                <br />
                기쁨은 빛나는 골드 입자로, 슬픔은 깊은 블루 입자로,
                <br />
                분노는 격렬한 레드 입자로 변환됩니다.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <EmotionTag label="기쁨" color="#FFD700" />
                <EmotionTag label="슬픔" color="#4A90D9" />
                <EmotionTag label="분노" color="#FF4444" />
                <EmotionTag label="평온" color="#00E5FF" />
                <EmotionTag label="사랑" color="#EC4899" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Phone mockup — real image */}
          <ScrollAnimation direction="right" delay={0.2} className="flex-1 overflow-hidden">
            <div className="relative mx-auto w-full max-w-[360px] md:max-w-[420px]">
              {/* Glow effect behind phone */}
              <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-gradient-to-br from-aether-cyan/10 via-aether-purple/8 to-aether-pink/6 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/phone-aurora.png"
                  alt="AETHER 앱 화면 - 입자 물결 시각화"
                  width={1024}
                  height={1024}
                  className="h-auto w-full"
                />
                {/* Heavy radial mask: reveal only the phone center, fade everything else to dark */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 55% 70% at 52% 50%, transparent 30%, #0B0B1A 75%)',
                  }}
                />
                {/* Top: completely mask AURORA FLOW text and aurora sky */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#0B0B1A] via-[#0B0B1A]/90 to-transparent" />
                {/* Bottom: mask snow and buttons */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#0B0B1A] via-[#0B0B1A]/80 to-transparent" />
              </div>

              {/* Floating accent particles outside phone */}
              <div className="animate-float pointer-events-none absolute right-0 top-1/4 h-2 w-2 rounded-full bg-aether-cyan/50 shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
              <div className="animate-float-delay pointer-events-none absolute left-0 top-2/3 h-1.5 w-1.5 rounded-full bg-aether-purple/50 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
              <div className="animate-float pointer-events-none absolute right-0 bottom-1/4 h-1 w-1 rounded-full bg-aether-pink/50 shadow-[0_0_6px_rgba(236,72,153,0.4)]" style={{ animationDelay: '2s' }} />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

function EmotionTag({ label, color }: { label: string; color: string }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 6px ${color}60`,
        }}
      />
      {label}
    </span>
  )
}
