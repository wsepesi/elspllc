/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './global.css';

import { SYSTEM_COLORS } from './colors'
import { createTheme } from '@material-ui/core/styles';

const BASE_FONT_SIZE = 16;

export const getRemFromPx = (fontSizePx: number): string => `${(fontSizePx / BASE_FONT_SIZE).toFixed(4)}rem`;

const theme = createTheme({
	palette: {
		primary: {
			main: SYSTEM_COLORS.SECONDARY,
			contrastText: '#FFF'
		},
		secondary: {
			main: '#FFF'
		}
	},
	typography: {
		fontFamily: ['Libre Franklin', 'sans-serif'].join(','),
		h1: {
			fontSize: getRemFromPx(64),
			//fontFamily: ['Aleo', 'serif'].join(','),
			lineHeight: getRemFromPx(78),
			fontWeight: 500
		},
        h2: {
            fontSize: getRemFromPx(76),
            lineHeight: getRemFromPx(92),
            fontWeight: 400
        },
		h3: {
			fontSize: getRemFromPx(54),
			lineHeight: getRemFromPx(65),
			fontWeight: 400
		},
		h4: {
			fontSize: getRemFromPx(40),
			lineHeight: getRemFromPx(48),
			fontWeight: 500
		},
		h5: {
			fontSize: getRemFromPx(24),
			lineHeight: getRemFromPx(29),
			fontWeight: 400
		},
		body1: {
			// writing
			fontSize: getRemFromPx(20),
			lineHeight: getRemFromPx(28),
            fontWeight: 400
		},
		body2: {
			// header bar
			fontSize: getRemFromPx(16),
			lineHeight: getRemFromPx(22),
            fontWeight: 500
		},
		subtitle1: {
			fontSize: getRemFromPx(32),
			lineHeight: getRemFromPx(48),
			fontWeight: 400
		},
        subtitle2: {
            //logo at top
            fontSize: getRemFromPx(22),
            lineHeight: getRemFromPx(27),
            style: "italic"
        },
		button: {
			color: 'backgroundLight',
			textTransform: 'none',
			fontSize: getRemFromPx(16),
			lineHeight: getRemFromPx(24),
			fontWeight: 600
		}
	},
	breakpoints: {
		values: {
			xl: 1280,
			lg: 950,
			md: 750,
			sm: 475,
			xs: 0
		}
	},
	overrides: {
		MuiListItem: {
			button: {
				margin: '4px 0',
				borderRadius: 8,
				'&:hover': {
					backgroundColor: SYSTEM_COLORS.BACKGROUND
				}
			}
		},
		MuiListItemText: {
			primary: {
				color: SYSTEM_COLORS.GRAY,
				textShadow: 'none',
				fontSize: getRemFromPx(12),
				lineHeight: getRemFromPx(18),
				fontWeight: 600
			},
			secondary: {
				fontSize: getRemFromPx(14),
				lineHeight: getRemFromPx(21),
				fontWeight: 600
			}
		},
		MuiListItemIcon: {
			root: {
				color: SYSTEM_COLORS.GRAY
			}
		},
		MuiButton: {
			text: {},
			root: {
				borderRadius: 8
			},
			contained: {
				boxShadow: 'none'
			},
			sizeSmall: {
				fontSize: getRemFromPx(12),
				lineHeight: getRemFromPx(18),
				fontWeight: 600,
				padding: '11px 20px'
			},
			sizeLarge: {
				fontSize: getRemFromPx(16),
				lineHeight: getRemFromPx(24),
				fontWeight: 600,
				padding: '15px 40px'
			},
			containedSecondary: {
				border: `1px solid ${SYSTEM_COLORS.LIGHT_GRAY_30}`,
				'&:hover': {
					backgroundColor: SYSTEM_COLORS.BACKGROUND,
					boxShadow: 'none'
				}
			}
		},
		MuiTabs: {
			indicator: {
				height: 4
			}
		},
		MuiTab: {
			root: {
				color: SYSTEM_COLORS.GRAY_SHADE,
				textShadow: 'none',
				fontSize: `${getRemFromPx(12)} !important`,
				lineHeight: `${getRemFromPx(18)} !important`,
				fontWeight: 600
			}
		},
		MuiInput: {
			input: {
				paddingTop: 16,
				'&::placeholder': {
					paddingTop: 16
				}
			}
		},
		MuiPaper: {
			root: {
				background: '#FFFFFF'
			},
			elevation1: {
				boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.03)'
			},
			rounded: {
				borderRadius: 16
			}
		},
		MuiPopover: {
			paper: {
				boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.12)'
			}
		},
		MuiTableCell: {
			head: {
				textShadow: 'none',
				fontSize: getRemFromPx(13),
				lineHeight: getRemFromPx(19),
				color: SYSTEM_COLORS.GRAY
			}
		}
	}
});

theme.typography.h1 = {
	...theme.typography.h1,
	[theme.breakpoints.down('md')]: {
		fontSize: getRemFromPx(36),
		lineHeight: getRemFromPx(43)
	}
};
theme.overrides!.MuiListItemText!.primary = {
	...theme.overrides?.MuiListItemText?.primary,
	[theme.breakpoints.down('sm')]: {
		fontSize: getRemFromPx(16),
		lineHeight: getRemFromPx(24)
	}
};

export default theme;
