import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AETHER - 당신의 감정은 먼지가 아니라, 별이 됩니다'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B0B1A 0%, #12122A 40%, #1A1A3E 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)',
            display: 'flex',
          }}
        />

        {/* Star dots */}
        {[
          { top: 80, left: 150, size: 3, opacity: 0.6 },
          { top: 120, left: 900, size: 2, opacity: 0.4 },
          { top: 200, left: 200, size: 2, opacity: 0.3 },
          { top: 350, left: 1000, size: 3, opacity: 0.5 },
          { top: 450, left: 100, size: 2, opacity: 0.4 },
          { top: 500, left: 800, size: 2, opacity: 0.3 },
          { top: 60, left: 600, size: 2, opacity: 0.5 },
          { top: 550, left: 400, size: 2, opacity: 0.3 },
        ].map((star, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${star.top}px`,
              left: `${star.left}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              background: '#00E5FF',
              opacity: star.opacity,
              display: 'flex',
            }}
          />
        ))}

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* AETHER label */}
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '0.5em',
              color: '#94A3B8',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            AETHER
          </div>

          {/* Main heading */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: 700,
              lineHeight: 1.3,
              textAlign: 'center',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#E2E8F0', display: 'flex' }}>
              당신의 감정은 먼지가 아니라,
            </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #00E5FF, #A855F7)',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
              }}
            >
              별이 됩니다.
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '20px',
              color: '#94A3B8',
              textAlign: 'center',
              display: 'flex',
            }}
          >
            입자 물리학에서 영감을 받은 감정 표현 앱
          </div>

          {/* Decorative line */}
          <div
            style={{
              marginTop: '32px',
              width: '120px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
