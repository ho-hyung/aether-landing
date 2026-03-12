'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 -translate-y-1/2"
          >
            <div className="glass-card gradient-border overflow-hidden rounded-2xl p-8 text-center">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-aether-cyan/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 rounded-full bg-aether-purple/10 blur-3xl" />

              {/* Icon */}
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
                <div className="absolute -inset-2 rounded-full bg-aether-cyan/20 blur-md" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-aether-cyan/30 bg-gradient-to-br from-aether-cyan/10 to-transparent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <h3 className="mb-2 text-lg font-bold text-aether-text">
                곧 만나요!
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-aether-muted">
                AETHER iOS 앱이 곧 출시됩니다.
                <br />
                당신의 감정이 별이 되는 순간을 기대해 주세요.
              </p>

              {/* Close button */}
              <button
                onClick={onClose}
                className="glass-card glow-cyan rounded-full px-8 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              >
                확인
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
