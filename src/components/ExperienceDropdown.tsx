'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

import React from 'react'

const ExperienceDropdown = (): React.ReactElement => {
  const handleClick = (to: string) => {
    window.location.href = '/' + to
  }

  return (
    <div className="w-[35%] rounded-md">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="education">
          <AccordionTrigger className="px-4">Education</AccordionTrigger>
          <AccordionContent className="px-4">
            <ul className="space-y-2">
              <li>
                <p className="text-sm">
                  University of Minnesota Law School, JD cum laude, Dean's List
                </p>
              </li>
              <li>
                <p className="text-sm">
                  University of Michigan School of Public Health, MPH
                </p>
              </li>
              <li>
                <p className="text-sm">
                  Washington University in St. Louis, BA Biology
                </p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="bar-admissions">
          <AccordionTrigger className="px-4">Bar Admissions</AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="flex flex-col space-y-3">
              <ul className="space-y-1">
                <li>
                  <p className="text-sm">Minnesota (1994)</p>
                </li>
                <li>
                  <p className="text-sm">Illinois (1995)</p>
                </li>
              </ul>
              <p className="text-sm font-medium">Admitted to:</p>
              <ul className="space-y-1">
                <li>
                  <p className="text-sm">
                    U.S. District Court Northern District of Illinois (1996;
                    trial bar 2004)
                  </p>
                </li>
                <li>
                  <p className="text-sm">
                    U.S. District Court District of Minnesota (1997)
                  </p>
                </li>
                <li>
                  <p className="text-sm">
                    U.S. District Court Central District of Illinois (1999)
                  </p>
                </li>
                <li>
                  <p className="text-sm">
                    U.S. District Court Southern District of Illinois (2000)
                  </p>
                </li>
                <li>
                  <p className="text-sm">
                    Third Circuit Court of Appeals (2011)
                  </p>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="organizations">
          <AccordionTrigger className="px-4">Organizations</AccordionTrigger>
          <AccordionContent className="px-4">
            <ul className="space-y-2">
              <li>
                <p className="text-sm">
                  Commissioner, Minneapolis Environmental Commission (1992-1994)
                </p>
              </li>
              <li>
                <p className="text-sm">
                  Minnesota State Bar Association, Section on Environmental,
                  Natural Resources & Energy Law: Governing Council Delegate
                  (2007-2014, 2019-2025), Secretary (2014-2015), Treasurer
                  (2015-2016), Vice-Chair (2016-2017), Chair (2017-2018)
                </p>
              </li>
              <li>
                <p className="text-sm">
                  Minnesota CLE's Minnesota Environmental Institute Planning
                  Committee (2009-2025)
                </p>
              </li>
              <li>
                <p className="text-sm">
                  Minnesota Brownfields ReScape Awards Judge (2013-2015)
                </p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div
        className="flex flex-1 cursor-pointer items-center border-t px-4 py-4 font-medium text-sm transition-all hover:underline"
        onClick={() => handleClick('presentations')}
      >
        Presentations
      </div>
      <div
        className="flex flex-1 cursor-pointer items-center border-t px-4 py-4 font-medium text-sm transition-all hover:underline"
        onClick={() => handleClick('representative_experience')}
      >
        Representative Experience
      </div>
    </div>
  )
}

export default ExperienceDropdown
