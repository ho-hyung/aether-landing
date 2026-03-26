'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollAnimation from './scroll-animation'

const faqs = [
  {
    question: 'AETHER는 어떤 앱인가요?',
    answer:
      'AETHER는 입자 물리학에서 영감을 받은 감정 표현 앱입니다. 화면을 터치하면 감정이 물리 법칙을 따르는 입자로 변환되어 시각화됩니다. 기쁨, 슬픔, 분노, 평온, 사랑 등 5가지 감정을 각각 고유한 색상과 움직임의 입자로 표현할 수 있습니다.',
  },
  {
    question: 'AETHER는 무료인가요?',
    answer:
      'AETHER는 무료로 다운로드하여 사용할 수 있습니다. 현재 Google Play에서 Android 버전을 제공하고 있으며, iOS(App Store) 버전은 준비 중입니다.',
  },
  {
    question: '어떤 기기에서 사용할 수 있나요?',
    answer:
      '현재 Android 기기에서 사용할 수 있으며, Google Play 스토어에서 다운로드할 수 있습니다. iOS 버전은 곧 출시 예정입니다.',
  },
  {
    question: '감정 공유 기능은 어떻게 작동하나요?',
    answer:
      '소중한 사람과 감정 궤도를 연결하면, 서로의 감정 상태를 실시간으로 확인할 수 있습니다. 상대방이 강한 감정을 느낄 때 부드러운 알림을 받아, 멀리 있어도 곁에 있는 느낌을 전할 수 있습니다. 부모-자녀, 연인, 부부, 친구 관계에서 활용할 수 있습니다.',
  },
  {
    question: '사운드스케이프 기능이란 무엇인가요?',
    answer:
      '사운드스케이프는 감정의 파동을 소리로 변환하는 기능입니다. 기쁨은 밝은 멜로디로, 슬픔은 깊은 앰비언트 사운드로 표현됩니다. 하루 동안 기록된 감정이 만드는 유일한 사운드트랙을 감상하며 명상이나 회고에 활용할 수 있습니다.',
  },
  {
    question: '개인정보는 안전한가요?',
    answer:
      '감정 데이터는 연결된 사람에게만 공개되는 프라이빗 스페이스에서 관리됩니다. 사용자가 직접 공유 대상을 선택할 수 있으며, 원하지 않는 상대에게는 감정 데이터가 노출되지 않습니다.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(168, 85, 247, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-10 text-center sm:mb-16">
          <ScrollAnimation>
            <p
              className="mb-4 text-sm font-medium tracking-widest text-aether-purple"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              FAQ
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <h2 className="text-[1.5rem] font-bold leading-tight sm:text-2xl md:text-4xl lg:text-5xl">
              자주 묻는 <span className="text-gradient-cyan">질문</span>
            </h2>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollAnimation key={i} delay={0.05 * i}>
              <div className="glass-card gradient-border overflow-hidden rounded-2xl">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] md:px-8"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-medium leading-relaxed md:text-base">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-aether-cyan"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-aether-muted md:px-8 md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
