import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'

export const metadata: Metadata = {
  title: 'Presentations',
  description:
    'View our speaking engagements and presentations on environmental law topics including PFAS, contaminated sites, environmental compliance, and regulatory updates.',
  keywords:
    'environmental law presentations, PFAS presentations, environmental compliance speaking, regulatory updates, environmental law conferences',
  alternates: { canonical: '/presentations' },
  openGraph: {
    title: 'Presentations | Environmental Law and Science, PLLC',
    description: 'Speaking engagements and presentations on environmental law',
    type: 'website',
    url: '/presentations',
  },
}

export default function PresentationsPage() {
  return (
    <PageLayout>
      <SimpleTemplate title="Presentations">
        <ul className="list-none space-y-4">
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Your Product Has PFAS, Now What? What to Know About PFAS Bans"
              co-presented with Shalene Thomas at Minnesota CLE's 2024 Minnesota
              Environmental Institute. April 2024.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "PFAS: Current Developments and Future Directions" co-presented
              with Shalene Thomas to Hennepin County Bar Association,
              Environmental Meeting. May 2021.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "CERCLA and MERLA Basics" co-presented with Lindsey Remakel at
              Minnesota CLE's 2020 Minnesota Environmental Institute (virtual).
              August 2020.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Environmental and Safety Law During COVID-19" presented at CLE
              sponsored by Minnesota State Bar Association, Section on
              Environmental, Natural Resources & Energy Law. April 2020
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "The Trump Era of Environmental Law After Year One - What Has
              Happened and What Comes Next" presented at CLE sponsored by
              Minnesota State Bar Association, Section on Environmental, Natural
              Resources & Energy Law. February 2018.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Chemical Release Reporting Basics" co-presented with Brian Bell at
              Minnesota CLE's 2017 Minnesota Environmental Institute. April
              2017.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "The Trump Era of Environmental Law – What to Expect" presented at
              CLE sponsored by Minnesota State Bar Association, Section on
              Environmental, Natural Resources & Energy Law. January 2017.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Superfund Law Origins and History" presented at "Happy Birthday
              Superfund! Past, Present and Future" CLE sponsored by Minnesota
              State Bar Association, Section on Environmental, Natural Resources
              & Energy Law. April 2016
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Basics of Environmental Issues in Business Transactions"
              co-presented with Lindsey Remakel at Minnesota CLE's 2015
              Minnesota Environmental Institute. April 2015.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Due Diligence Perspectives" co-presented with Joseph Maternowski
              and Danial Schleck at "Hopportunity Knocks: Brownfields, Beer and
              the Law" CLE co-sponsored by Minnesota Brownfields and Minnesota
              State Bar Association, Section on Environmental, Natural Resources
              & Energy Law. March 2015
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Chemical Release Reporting Basics" presented at Minnesota CLE's
              2014 Minnesota Environmental Institute. April 2014.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Basics of Environmental Issues in Business Transactions"
              co-presented with Sara Peterson and Jacob Woodard at Minnesota
              CLE's 2012 Minnesota Environmental Institute. April 2012.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "TSCA Regulation of PCBs" presented at Minnesota CLE's 2010
              Minnesota Environmental Institute. April 2010.
            </p>
          </li>
          <li className="border-l-2 border-primary/30 pl-4 py-1">
            <p>
              "Chemical Release Reporting Basics" presented at Minnesota CLE's
              2009 Minnesota Environmental Institute. April 2009.
            </p>
          </li>
        </ul>
      </SimpleTemplate>
    </PageLayout>
  )
}
