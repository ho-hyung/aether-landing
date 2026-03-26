'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollAnimation from './scroll-animation'

const testimonials = [
  {
    quote:
      '감정을 말로 표현하기 어려웠는데, AETHER에서는 그냥 화면을 터치하면 돼요. 내 마음이 입자가 되어 흩어지는 걸 보면 신기하게 마음이 가벼워져요.',
    author: '민지',
    role: '대학생, 22세',
    color: '#00E5FF',
    emoji: '✨',
  },
  {
    quote:
      '멀리 사는 딸과 감정 궤도를 공유하고 있어요. 딸이 힘들어할 때 알림이 오면, 전화 한 통 걸게 되더라고요. 말없이도 연결된 느낌이에요.',
    author: '영숙',
    role: '어머니, 55세',
    color: '#A855F7',
    emoji: '💜',
  },
  {
    quote:
      '사운드스케이프 기능이 정말 좋아요. 하루 끝에 내 감정이 만든 음악을 들으면서 명상하는 게 일상이 됐어요. 감정을 소리로 듣는 경험은 처음이에요.',
    author: '준혁',
    role: '직장인, 31세',
    color: '#EC4899',
    emoji: '🎵',
  },
  {
    quote:
      '연인과 함께 쓰고 있는데, 서로의 감정 상태를 자연스럽게 알 수 있어서 다툼이 줄었어요. 우주를 공유한다는 콘셉트가 로맨틱해요.',
    author: '수빈',
    role: '디자이너, 28세',
    color: '#FFD700',
    emoji: '🌟',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  const t = testimonials[current]

  return (
    <section id="reviews" className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-32">
      {/* Background constellation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="h-full w-full opacity-[0.03]" viewBox="0 0 800 600">
          {/* Constellation dots and lines */}
          {constellationPoints.map((p, i) => (
            <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="2" fill="white" />
          ))}
          {constellationLines.map(([a, b], i) => (
            <line
              key={`line-${i}`}
              x1={constellationPoints[a].x} y1={constellationPoints[a].y}
              x2={constellationPoints[b].x} y2={constellationPoints[b].y}
              stroke="white" strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <ScrollAnimation>
            <p
              className="mb-4 text-sm font-medium tracking-widest text-aether-cyan"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              TESTIMONIALS
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-[1.5rem] font-bold leading-tight sm:text-2xl md:text-4xl lg:text-5xl">
              사용자들이 만든{' '}
              <span className="text-gradient-cyan">우주</span>
            </h2>
          </ScrollAnimation>
        </div>

        {/* Carousel */}
        <ScrollAnimation>
          <div className="relative">
            <div className="glass-card gradient-border overflow-hidden rounded-2xl px-10 py-8 sm:px-12 md:p-12">
              {/* Decorative accent glow (changes with testimonial) */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl transition-colors duration-700"
                style={{ background: `${t.color}08` }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full blur-3xl transition-colors duration-700"
                style={{ background: `${t.color}06` }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="relative text-center"
                >
                  {/* Avatar circle */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                    <div className="relative">
                      <div
                        className="absolute -inset-2 rounded-full opacity-30 blur-md"
                        style={{ background: t.color }}
                      />
                      <div
                        className="relative flex h-14 w-14 items-center justify-center rounded-full border"
                        style={{
                          borderColor: `${t.color}40`,
                          background: `linear-gradient(135deg, ${t.color}15, transparent)`,
                        }}
                      >
                        <span className="text-2xl">{t.emoji}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote mark */}
                  <div
                    className="mb-4 text-5xl font-light leading-none"
                    style={{ color: `${t.color}40` }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote text */}
                  <p className="mb-8 text-base leading-relaxed text-aether-text/90 md:text-lg">
                    {t.quote}
                  </p>

                  {/* Author info */}
                  <div>
                    <p className="font-semibold" style={{ color: t.color }}>
                      {t.author}
                    </p>
                    <p className="text-sm text-aether-muted">
                      {t.role}
                    </p>
                  </div>

                  {/* Star rating */}
                  <div className="mt-4 flex justify-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={t.color} fillOpacity="0.6">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white sm:left-2 md:left-4 md:h-10 md:w-10"
                aria-label="이전 후기"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white sm:right-2 md:right-4 md:h-10 md:w-10"
                aria-label="다음 후기"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    backgroundColor: i === current ? item.color : 'rgba(255,255,255,0.15)',
                  }}
                  aria-label={`후기 ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

// Constellation background data
const constellationPoints = [
  { x: 100, y: 80 }, { x: 150, y: 50 }, { x: 200, y: 90 }, { x: 180, y: 140 },
  { x: 350, y: 120 }, { x: 400, y: 80 }, { x: 420, y: 150 },
  { x: 550, y: 60 }, { x: 600, y: 100 }, { x: 580, y: 160 },
  { x: 700, y: 90 }, { x: 720, y: 140 },
  { x: 130, y: 350 }, { x: 180, y: 400 }, { x: 220, y: 370 },
  { x: 450, y: 420 }, { x: 500, y: 380 }, { x: 520, y: 450 },
  { x: 650, y: 400 }, { x: 700, y: 440 }, { x: 680, y: 500 },
]

const constellationLines: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [7, 8], [8, 9], [10, 11],
  [12, 13], [13, 14], [15, 16], [16, 17], [18, 19], [19, 20],
]
