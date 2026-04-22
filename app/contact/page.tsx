import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'
import LinkedinIcon from '@/components/icons/LinkedinIcon'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Environmental Law and Science, PLLC for expert environmental legal services. Get in touch for PFAS litigation, contaminated site remediation, and environmental compliance matters.',
  keywords:
    'contact environmental lawyer, environmental law consultation, PFAS attorney, contaminated sites lawyer, environmental compliance help',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Environmental Law and Science, PLLC',
    description: 'Get in touch for expert environmental legal services',
    type: 'website',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <PageLayout>
      <SimpleTemplate title="Contact">
        <p className="font-caslon text-lg sm:text-xl md:text-2xl text-gray-shade leading-snug max-w-2xl mb-10 md:mb-16">
          For environmental law inquiries, or to discuss a compliance,
          contaminated-site, or transactional matter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <section>
            <h2 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-4 pb-3 border-b border-transparent-border">
              Office
            </h2>
            <address className="not-italic text-base leading-relaxed text-gray-shade">
              Environmental Law and Science, PLLC
              <br />
              8389 Seneca Pointe
              <br />
              Eden Prairie, MN 55347
            </address>
          </section>

          <section>
            <h2 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-4 pb-3 border-b border-transparent-border">
              Direct
            </h2>
            <dl className="space-y-5">
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-gray font-libre mb-1">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:js.envirolawsci@att.net"
                    className="group inline-flex items-baseline gap-2 text-base text-gray-shade transition-colors duration-300 hover:text-secondary focus-visible:text-secondary focus-visible:outline-none"
                  >
                    <span>js.envirolawsci@att.net</span>
                    <span
                      aria-hidden
                      className="text-gray opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-gray font-libre mb-1">
                  Phone
                </dt>
                <dd>
                  <a
                    href="tel:+19524268279"
                    className="text-base text-gray-shade transition-colors duration-300 hover:text-secondary focus-visible:text-secondary focus-visible:outline-none"
                  >
                    (952) 426-8279
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-gray font-libre mb-1">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/jeffery-sepesi-24980315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-base text-gray-shade transition-colors duration-300 hover:text-secondary focus-visible:text-secondary focus-visible:outline-none"
                  >
                    <LinkedinIcon className="size-4" />
                    <span>Connect with Jeff Sepesi</span>
                    <span
                      aria-hidden
                      className="text-gray opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>

      </SimpleTemplate>
    </PageLayout>
  )
}
