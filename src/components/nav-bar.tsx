'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: '기능', href: '#features' },
  { label: '공유', href: '#sharing' },
  { label: '리뷰', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: '다운로드', href: '#download' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-aether-bg/80 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 md:py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.3em] text-aether-text transition-colors hover:text-aether-cyan"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          AETHER
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-aether-muted transition-colors hover:text-aether-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-8 w-8 items-center justify-center text-aether-muted sm:hidden"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/[0.06] bg-aether-bg/95 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-lg px-3 py-2.5 text-sm text-aether-muted transition-colors hover:bg-white/5 hover:text-aether-cyan"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
