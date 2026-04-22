import type { Metadata, Viewport } from 'next'
import { Libre_Franklin, Libre_Caslon_Text } from 'next/font/google'
import ClientLayout from './ClientLayout'
import { siteName, siteUrl } from '../src/configs/site'
import '../src/configs/global.css'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
})

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-caslon',
})


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    'Environmental law practice grounded in science and law. Expert legal services for PFAS litigation, contaminated site remediation, environmental compliance, and business transactions.',
  keywords:
    'environmental law, PFAS litigation, contaminated sites, environmental compliance, business transactions, environmental lawyer, regulatory affairs, site remediation',
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteName,
    description: 'Environmental law practice grounded in science and law',
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Environmental law practice grounded in science and law',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${libreCaslon.variable}`}
    >
      <body className={libreFranklin.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
