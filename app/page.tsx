import AboutPanel from '@/components/AboutPanel'
import CorePanel from '@/components/CorePanel'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { siteName, siteUrl } from '@/configs/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteName,
  alternateName: 'Environmental Law and Science',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/opengraph-image`,
  description:
    'Environmental law practice grounded in science and law. Expert legal services for PFAS litigation, contaminated site remediation, environmental compliance, and business transactions.',
  telephone: '+1-952-426-8279',
  email: 'js.envirolawsci@att.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8389 Seneca Pointe',
    addressLocality: 'Eden Prairie',
    addressRegion: 'MN',
    postalCode: '55347',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  founder: {
    '@type': 'Person',
    name: 'Jeffery A. Sepesi',
    jobTitle: 'Environmental Attorney',
  },
  knowsAbout: [
    'Environmental Law',
    'PFAS Regulation',
    'CERCLA',
    'RCRA',
    'Clean Water Act',
    'Clean Air Act',
    'TSCA',
    'Contaminated Site Remediation',
    'Environmental Compliance',
    'Environmental Aspects of Business Transactions',
  ],
  sameAs: ['https://www.linkedin.com/in/jeffery-sepesi-24980315'],
}

export default function HomePage() {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        backgroundImage: 'url(/images/lake_4.webp)',
        backgroundSize: 'auto 185%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <AboutPanel />
      <CorePanel />
      <Footer />
    </div>
  )
}
