import type { Metadata } from 'next'
import {
  Libre_Franklin,
  Playfair_Display,
  Crimson_Pro,
  EB_Garamond,
} from 'next/font/google'
import ClientLayout from './ClientLayout'
import '../src/configs/global.css'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
})

export const metadata: Metadata = {
  title: {
    default: 'Environmental Law and Science, PLLC',
    template: '%s | Environmental Law and Science, PLLC',
  },
  description:
    'Environmental law practice grounded in science and law. Expert legal services for PFAS litigation, contaminated site remediation, environmental compliance, and business transactions.',
  keywords:
    'environmental law, PFAS litigation, contaminated sites, environmental compliance, business transactions, environmental lawyer, regulatory affairs, site remediation',
  authors: [{ name: 'Environmental Law and Science, PLLC' }],
  creator: 'Environmental Law and Science, PLLC',
  publisher: 'Environmental Law and Science, PLLC',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Environmental Law and Science, PLLC',
    description: 'Environmental law practice grounded in science and law',
    siteName: 'Environmental Law and Science, PLLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Environmental Law and Science, PLLC',
    description: 'Environmental law practice grounded in science and law',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${playfairDisplay.variable} ${crimsonPro.variable} ${ebGaramond.variable}`}
    >
      <body className={libreFranklin.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
