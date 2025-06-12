/* eslint-disable */
import './global.css'

import { SYSTEM_COLORS } from './colors'

const BASE_FONT_SIZE = 16

export const getRemFromPx = (fontSizePx: number): string =>
  `${(fontSizePx / BASE_FONT_SIZE).toFixed(4)}rem`

// Unified theme configuration for the application
// This replaces the MUI theme and provides configuration for both Tailwind and shadcn/ui
export const theme = {
  colors: {
    primary: SYSTEM_COLORS.PRIMARY,
    primaryShade: SYSTEM_COLORS.PRIMARY_SHADE,
    secondary: SYSTEM_COLORS.SECONDARY,
    secondaryShade: SYSTEM_COLORS.SECONDARY_SHADE,
    tertiary: SYSTEM_COLORS.TERTIARY,
    tertiaryShade: SYSTEM_COLORS.TERTIARY_SHADE,
    background: SYSTEM_COLORS.BACKGROUND,
    error: SYSTEM_COLORS.ERROR,
    gray: SYSTEM_COLORS.GRAY,
    gray10: SYSTEM_COLORS.GRAY_10,
    grayShade: SYSTEM_COLORS.GRAY_SHADE,
    lightGray: SYSTEM_COLORS.LIGHT_GRAY,
    lightGray30: SYSTEM_COLORS.LIGHT_GRAY_30,
    white: SYSTEM_COLORS.WHITE,
    transparentBorder: SYSTEM_COLORS.TRANSPARENT_BORDER,
    black: SYSTEM_COLORS.BLACK,
  },
  typography: {
    fontFamily: ['Libre Franklin', 'sans-serif'].join(','),
    sizes: {
      h1: {
        fontSize: getRemFromPx(64),
        lineHeight: getRemFromPx(78),
        fontWeight: 400,
        responsive: {
          md: {
            fontSize: getRemFromPx(36),
            lineHeight: getRemFromPx(43),
          },
        },
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
        fontSize: getRemFromPx(16),
        lineHeight: getRemFromPx(24),
        fontWeight: 600,
      },
    },
  },
  breakpoints: {
    xs: 0,
    sm: 475,
    md: 750,
    lg: 950,
    xl: 1280,
  },
  radius: {
    sm: 'calc(var(--radius) - 4px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    xl: 'calc(var(--radius) + 4px)',
  },
}

// Export individual components for easier access
export const colors = theme.colors
export const typography = theme.typography
export const breakpoints = theme.breakpoints

// Backwards compatibility - keep the default export as the theme object
export default theme
