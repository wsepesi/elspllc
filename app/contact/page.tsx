import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import { Mail, Phone } from 'lucide-react'
import LinkedinIcon from '@/components/icons/LinkedinIcon'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Environmental Law and Science, PLLC for expert environmental legal services. Get in touch for PFAS litigation, contaminated site remediation, and environmental compliance matters.',
  keywords:
    'contact environmental lawyer, environmental law consultation, PFAS attorney, contaminated sites lawyer, environmental compliance help',
  openGraph: {
    title: 'Contact | Environmental Law and Science, PLLC',
    description: 'Get in touch for expert environmental legal services',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center px-6">
        <div className="rounded-sm bg-white opacity-95 w-full max-w-2xl py-12 px-8 md:px-12 flex flex-col justify-center items-center gap-8 shadow-sm">
          <h3 className="font-playfair text-3xl md:text-4xl leading-tight">Contact Us</h3>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-8">
            <div className="flex items-center justify-center">
              <p className="text-body1 leading-body1">
                Environmental Law and Science, PLLC
                <br />
                8389 Seneca Pointe
                <br />
                Eden Prairie, MN 55347
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row mb-4 items-center justify-center">
                <Mail className="mr-3 size-5" />
                <a
                  href="mailto:js.envirolawsci@att.net"
                  className="text-body1 leading-body1 text-secondary hover:text-primary-shade hover:underline"
                >
                  js.envirolawsci@att.net
                </a>
              </div>
              <div className="flex flex-row mb-4 items-center justify-center">
                <LinkedinIcon className="mr-3 size-5" />
                <a
                  href="https://www.linkedin.com/in/jeffery-sepesi-24980315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body1 leading-body1 text-secondary hover:text-primary-shade hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
              <div className="flex flex-row mb-4 items-center justify-center">
                <Phone className="mr-3 size-5" />
                <p className="text-body1 leading-body1">(952) 426-8279</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
