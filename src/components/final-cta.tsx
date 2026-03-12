'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollAnimation from './scroll-animation'
import ComingSoonModal from './coming-soon-modal'

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative px-5 py-16 sm:px-6 md:py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(0, 229, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 30%, transparent 60%)',
        }}
      />

      {/* Decorative cosmic visual — pink nebula phone image */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
          <Image
            src="/images/pink-nebula-phone.png"
            alt=""
            fill
            className="object-cover opacity-20 blur-[1px]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0B0B1A_65%)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollAnimation>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative star cluster above */}
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              {[
                { size: 2, color: '#00E5FF', opacity: 0.4 },
                { size: 3, color: '#A855F7', opacity: 0.5 },
                { size: 6, color: '#00E5FF', opacity: 0.7 },
                { size: 3, color: '#EC4899', opacity: 0.5 },
                { size: 2, color: '#A855F7', opacity: 0.4 },
              ].map((star, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    background: star.color,
                    opacity: star.opacity,
                    boxShadow: `0 0 ${star.size * 3}px ${star.color}60`,
                  }}
                />
              ))}
            </div>

            <p
              className="mb-6 text-sm font-light tracking-[0.4em] text-aether-muted md:text-base"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              AETHER
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
              <span className="text-gradient-cyan">My Emotional Space</span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm text-aether-muted sm:text-base md:mb-10 md:text-lg">
              지금 바로 당신만의 감정 우주를 시작하세요.
              <br />
              당신의 감정은 별이 될 자격이 있습니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="glass-card glow-cyan inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] sm:w-auto"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store에서 다운로드
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.TeamAether.Aether"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] sm:w-auto"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play에서 다운로드
              </a>
            </div>

            {/* Bottom decorative line */}
            <div className="mx-auto mt-12 w-48">
              <svg width="100%" height="8" viewBox="0 0 200 8">
                <line x1="0" y1="4" x2="200" y2="4" stroke="url(#ctaLine)" strokeWidth="0.5" />
                <circle cx="100" cy="4" r="2" fill="#00E5FF" fillOpacity="0.4" />
                <defs>
                  <linearGradient id="ctaLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>

      {/* Footer */}
      <footer className="relative mt-24 border-t border-white/[0.06] pt-8">
        <div className="mx-auto max-w-6xl text-center">
          <p
            className="text-xs tracking-wider text-aether-muted/60"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            &copy; {new Date().getFullYear()} AETHER. All rights reserved.
          </p>
        </div>
      </footer>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
