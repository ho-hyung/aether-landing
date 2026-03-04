'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollAnimation from './scroll-animation'

export default function CinematicVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.5 })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isInView) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isInView])

  return (
    <section ref={containerRef} className="relative px-4 py-10 sm:px-6 md:py-24">
      {/* Background glow synced with video tones */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.06) 0%, rgba(0, 229, 255, 0.03) 40%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <ScrollAnimation>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl"
          >
            {/* Top vignette */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-aether-bg/80 to-transparent" />
            {/* Bottom vignette */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-aether-bg/80 to-transparent" />
            {/* Side vignettes */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-aether-bg/40 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-aether-bg/40 to-transparent" />

            {/* Glow border effect */}
            <div className="pointer-events-none absolute -inset-[1px] z-20 rounded-2xl border border-white/[0.06] md:rounded-3xl" />

            {/* Video */}
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="auto"
              poster="/videos/aether-poster.jpg"
              className="block aspect-video w-full object-cover"
            >
              <source src="/videos/aether-intro-clean.mp4" type="video/mp4" />
            </video>

            {/* Caption overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 pb-8 text-center md:pb-12">
              <p className="text-xs tracking-[0.3em] text-white/50 md:text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                YOUR EMOTIONS BECOME A UNIVERSE
              </p>
              <p className="mt-1.5 text-sm font-light text-white/70 md:text-base">
                당신의 감정이 우주가 되는 순간
              </p>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
