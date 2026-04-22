import { ImageResponse } from 'next/og'

export const alt = 'Environmental Law and Science, PLLC'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #305473 0%, #4f708c 55%, #66b1f2 100%)',
          color: '#F3F3F1',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            opacity: 0.85,
            display: 'flex',
          }}
        >
          Environmental Law &amp; Science, PLLC
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              fontWeight: 700,
              maxWidth: 960,
            }}
          >
            Environmental law, grounded in science.
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.9,
              maxWidth: 900,
              display: 'flex',
            }}
          >
            PFAS &amp; chemicals · Contaminated sites · Compliance · Transactions
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 20,
            opacity: 0.85,
          }}
        >
          <span>envirolawsci.com</span>
          <span>Eden Prairie, MN</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
