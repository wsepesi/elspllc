import type { MetadataRoute } from 'next'
import { siteName } from '../src/configs/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: 'ELS PLLC',
    description:
      'Environmental law practice grounded in science and law.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F3F1',
    theme_color: '#305473',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
