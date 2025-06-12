/* eslint-disable */
import './global.css'

import { SYSTEM_COLORS } from './colors'
import { createTheme } from '@mui/material/styles'

const BASE_FONT_SIZE = 16

export const getRemFromPx = (fontSizePx: number): string =>
  `${(fontSizePx / BASE_FONT_SIZE).toFixed(4)}rem`

// MUI theme for backward compatibility with existing MUI components
const muiTheme = createTheme({
  palette: {
    primary: {
      main: SYSTEM_COLORS.SECONDARY,
      contrastText: '#FFF',
    },
    secondary: {
      main: SYSTEM_COLORS.PRIMARY,
      contrastText: '#FFF',
    },
    background: {
      default: SYSTEM_COLORS.BACKGROUND,
      paper: SYSTEM_COLORS.WHITE,
    },
    text: {
      primary: SYSTEM_COLORS.GRAY_SHADE,
      secondary: SYSTEM_COLORS.GRAY,
    },
    error: {
      main: SYSTEM_COLORS.ERROR,
    },
  },
  typography: {
    fontFamily: ['Libre Franklin', 'sans-serif'].join(','),
    h1: {
      fontSize: getRemFromPx(64),
      lineHeight: getRemFromPx(78),
      fontWeight: 400,
    },
    h2: {
      fontSize: getRemFromPx(76),
      lineHeight: getRemFromPx(92),
      fontWeight: 400,
    },
    h3: {
      fontSize: getRemFromPx(54),
      lineHeight: getRemFromPx(65),
      fontWeight: 400,
    },
    h4: {
      fontSize: getRemFromPx(40),
      lineHeight: getRemFromPx(48),
      fontWeight: 500,
    },
    h5: {
      fontSize: getRemFromPx(24),
      lineHeight: getRemFromPx(29),
      fontWeight: 400,
    },
    body1: {
      // writing
      fontSize: getRemFromPx(18),
      lineHeight: getRemFromPx(28),
      fontWeight: 300,
    },
    body2: {
      // header bar
      fontSize: getRemFromPx(16),
      lineHeight: getRemFromPx(22),
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: getRemFromPx(32),
      lineHeight: getRemFromPx(48),
      fontWeight: 400,
    },
    subtitle2: {
      //logo at top
      fontSize: getRemFromPx(22),
      lineHeight: getRemFromPx(27),
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    button: {
      textTransform: 'none',
      fontSize: getRemFromPx(16),
      lineHeight: getRemFromPx(24),
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      xl: 1280,
      lg: 950,
      md: 750,
      sm: 475,
      xs: 0,
    },
  },
})

muiTheme.typography.h1 = {
  ...muiTheme.typography.h1,
  [muiTheme.breakpoints.down('md')]: {
    fontSize: getRemFromPx(36),
    lineHeight: getRemFromPx(43),
  },
}

export default muiTheme
