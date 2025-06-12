import { Card, Link, Typography } from '@mui/material'
import { LinkedIn, Mail, Phone } from '@mui/icons-material'

import Page from './Page'
import React from 'react'

const Contact = (): React.ReactElement => {
  return (
    <Page>
      <div className="w-screen min-h-[93vh] flex flex-col items-center justify-center">
        <Card className="rounded-none bg-white opacity-95 w-[70vw] h-[40vh] flex flex-col justify-evenly items-center">
          <Typography variant="h3">Contact Us</Typography>
          <div className="flex flex-row justify-between items-center w-[50vw]">
            <div className="flex items-center justify-center">
              <Typography variant="body1">
                Environmental Law and Science, PLLC
                <br />
                8389 Seneca Pointe
                <br />
                Eden Prairie, MN 55347
              </Typography>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row m-[10px] items-center justify-center">
                <Mail className="mr-[10px]" />
                <Link
                  href="mailto:js.envirolawsci@att.net"
                  variant="body1"
                  color="inherit"
                  underline="hover"
                >
                  js.envirolawsci@att.net
                </Link>
              </div>
              <div className="flex flex-row m-[10px] items-center justify-center">
                <LinkedIn className="mr-[10px]" />
                <Link
                  href="https://www.linkedin.com/in/jeffery-sepesi-24980315"
                  target="_blank"
                  rel="noopener"
                  variant="body1"
                  color="inherit"
                  underline="hover"
                >
                  Connect on LinkedIn
                </Link>
              </div>
              <div className="flex flex-row m-[10px] items-center justify-center">
                <Phone className="mr-[10px]" />
                <Typography variant="body1">(952) 426-8279</Typography>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  )
}

export default Contact
