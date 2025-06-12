import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'
import { Typography } from '@mui/material'

const Presentations = (): React.ReactElement => {
  return (
    <Page>
      <SimpleTemplate title="Presentations">
        <ul className="max-h-full max-w-full w-auto h-auto">
          <li>
            <Typography>
              “PFAS: Current Developments and Future Directions” co-presented
              with Shalene Thomas to Hennepin County Bar Association,
              Environmental Meeting. May 2021.
            </Typography>
          </li>
          <li>
            <Typography>
              “CERCLA and MERLA Basics” co-presented with Lindsey Remakel at
              Minnesota CLE’s 2020 Minnesota Environmental Institute (virtual).
              August 2020.
            </Typography>
          </li>
          <li>
            <Typography>
              “Environmental and Safety Law During COVID-19” presented at CLE
              sponsored by Minnesota State Bar Association, Section on
              Environmental, Natural Resources & Energy Law. April 2020
            </Typography>
          </li>
          <li>
            <Typography>
              “The Trump Era of Environmental Law After Year One - What Has
              Happened and What Comes Next” presented at CLE sponsored by
              Minnesota State Bar Association, Section on Environmental, Natural
              Resources & Energy Law. February 2018.
            </Typography>
          </li>
          <li>
            <Typography>
              “Chemical Release Reporting Basics” co-presented with Brian Bell
              at Minnesota CLE’s 2017 Minnesota Environmental Institute. April
              2017.
            </Typography>
          </li>
          <li>
            <Typography>
              “The Trump Era of Environmental Law – What to Expect” presented at
              CLE sponsored by Minnesota State Bar Association, Section on
              Environmental, Natural Resources & Energy Law. January 2017.
            </Typography>
          </li>
          <li>
            <Typography>
              “Superfund Law Origins and History” presented at “Happy Birthday
              Superfund! Past, Present and Future” CLE sponsored by Minnesota
              State Bar Association, Section on Environmental, Natural Resources
              & Energy Law. April 2016
            </Typography>
          </li>
          <li>
            <Typography>
              “Basics of Environmental Issues in Business Transactions”
              co-presented with Lindsey Remakel at Minnesota CLE’s 2015
              Minnesota Environmental Institute. April 2015.
            </Typography>
          </li>
          <li>
            <Typography>
              “Due Diligence Perspectives” co-presented with Joseph Maternowski
              and Danial Schleck at “Hopportunity Knocks: Brownfields, Beer and
              the Law” CLE co-sponsored by Minnesota Brownfields and Minnesota
              State Bar Association, Section on Environmental, Natural Resources
              & Energy Law. March 2015
            </Typography>
          </li>
          <li>
            <Typography>
              “Chemical Release Reporting Basics” presented at Minnesota CLE’s
              2014 Minnesota Environmental Institute. April 2014.
            </Typography>
          </li>
          <li>
            <Typography>
              “Basics of Environmental Issues in Business Transactions”
              co-presented with Sara Peterson and Jacob Woodard at Minnesota
              CLE’s 2012 Minnesota Environmental Institute. April 2012.
            </Typography>
          </li>
          <li>
            <Typography>
              “TSCA Regulation of PCBs” presented at Minnesota CLE’s 2010
              Minnesota Environmental Institute. April 2010.
            </Typography>
          </li>
          <li>
            <Typography>
              “Chemical Release Reporting Basics” presented at Minnesota CLE’s
              2009 Minnesota Environmental Institute. April 2009.
            </Typography>
          </li>
        </ul>
      </SimpleTemplate>
    </Page>
  )
}

export default Presentations
