'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ComingSoonModal from './coming-soon-modal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-16 md:px-6 md:py-20">
      {/* Background gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(0, 229, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)',
        }}
      />

      {/* Cosmic Orb — large animated nebula behind headline */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] z-0 -translate-x-1/2 -translate-y-1/2 md:top-1/3">
        <div className="relative h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[560px] md:w-[560px]">
          {/* Outer halo rings */}
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[110%] w-[110%] rounded-full border border-aether-cyan/[0.04]" />
          <div className="animate-spin-slow-reverse absolute left-1/2 top-1/2 h-[90%] w-[90%] rounded-full border border-aether-purple/[0.06]" />
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[70%] w-[70%] rounded-full border border-dashed border-white/[0.04]" />

          {/* Nebula layers */}
          <div className="animate-pulse-glow absolute inset-[15%] rounded-full bg-gradient-to-br from-aether-cyan/[0.07] via-aether-purple/[0.05] to-aether-pink/[0.04] blur-3xl" />
          <div className="animate-pulse-glow absolute inset-[25%] rounded-full bg-gradient-to-tr from-aether-purple/[0.08] via-transparent to-aether-cyan/[0.06] blur-2xl" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-aether-cyan/[0.06] to-transparent blur-xl" />

          {/* Core glow */}
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 shadow-[0_0_60px_20px_rgba(0,229,255,0.15)]" />

          {/* Floating orbital particles */}
          {[
            { size: 3, radius: '38%', duration: '18s', color: '#00E5FF', delay: '0s' },
            { size: 2, radius: '48%', duration: '24s', color: '#A855F7', delay: '4s' },
            { size: 2.5, radius: '28%', duration: '15s', color: '#EC4899', delay: '8s' },
            { size: 1.5, radius: '55%', duration: '30s', color: '#00E5FF', delay: '2s' },
            { size: 2, radius: '20%', duration: '12s', color: '#FFD700', delay: '6s' },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: '50%',
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 4}px ${p.color}80`,
                '--orbit-radius': p.radius,
                animation: `orbit ${p.duration} linear infinite`,
                animationDelay: p.delay,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 text-xs font-light tracking-[0.4em] text-aether-muted sm:mb-8 sm:text-sm sm:tracking-[0.5em] md:text-base"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          AETHER
        </motion.p>

        <h1 className="mb-4 text-[1.65rem] font-bold leading-tight tracking-tight sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
          당신의 감정은 먼지가 아니라,
          <br />
          <span className="text-gradient-cyan">별이 됩니다.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 text-sm font-light tracking-widest text-aether-muted md:text-base"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Your Emotions Become Stars, Not Dust.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-aether-muted sm:text-base md:mb-10 md:text-lg"
        >
          입자 물리학에서 영감을 받은 감정 표현 앱.
          <br className="hidden md:block" />
          터치 한 번으로 감정을 우주의 입자로 변환하세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="glass-card glow-cyan inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] sm:w-auto"
          >
            <AppleIcon />
            App Store
          </button>
          <a
            href="https://play.google.com/store/apps/details?id=com.TeamAether.Aether"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] sm:w-auto"
          >
            <PlayStoreIcon />
            Google Play
          </a>
        </motion.div>
      </motion.div>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-aether-muted/60">
            SCROLL
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-aether-cyan/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayStoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  )
}
