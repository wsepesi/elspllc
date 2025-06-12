'use client'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Analytics } from '@vercel/analytics/react'
import muiTheme from '../src/configs/mui-theme'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
