import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

const BASE_URL = 'https://aether-page.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AETHER - My Emotional Space | 감정을 별로 만드는 앱',
    template: '%s | AETHER',
  },
  description:
    '당신의 감정은 먼지가 아니라, 별이 됩니다. 입자 물리학에서 영감을 받은 감정 표현 앱 AETHER. 터치 한 번으로 감정을 우주의 입자로 변환하세요.',
  keywords: [
    'AETHER', '에테르', '감정 트래커', '감정 표현 앱', '감정 일기',
    '감정 기록', '입자 물리학', '감정 시각화', '감정 우주',
    'emotional tracker', 'emotion app', 'particle physics emotion',
  ],
  authors: [{ name: 'Team Aether' }],
  creator: 'Team Aether',
  openGraph: {
    title: 'AETHER - My Emotional Space',
    description:
      '당신의 감정은 먼지가 아니라, 별이 됩니다. 입자 물리학 기반 감정 표현 앱 AETHER.',
    url: BASE_URL,
    siteName: 'AETHER',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AETHER - My Emotional Space',
    description: '당신의 감정은 먼지가 아니라, 별이 됩니다. 입자 물리학 기반 감정 표현 앱.',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4BwlWYrmbmphbhQPFMvskd_odtl7ytDqCp8FOgb-FL0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-clip">
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQHFZFXQ');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQHFZFXQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
