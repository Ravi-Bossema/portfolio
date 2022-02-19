import { createTheme } from '@mui/material';

export const DSTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#d3f9fd',
			contrastText: '#032324',
		},
		secondary: {
			main: '#09686b',
		},
		background: {
			default: '#141414',
			paper: '#032324',
		},
		text: {
			primary: '#d3f9fd',
			secondary: 'rgba(211,249,253,0.7)',
			disabled: 'rgba(211,249,253,0.5)',
			hint: 'rgba(211,249,253,0.5)',
		},
		divider: 'rgba(147,174,177,0.2)',
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'transparent',
					backdropFilter: 'blur(10px)',
					backgroundImage: 'none',
				},
			},
		},
		MuiTooltip: {
			arrow: true,
		},
	},
});

export const BardTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#b8e7e7',
			contrastText: '#090b1c',
		},
		secondary: {
			main: '#124d53',
		},
		background: {
			default: '#090b1c',
			paper: '#16264a',
		},
		text: {
			primary: '#b8e7e7',
			secondary: 'rgba(184,231,231,0.7)',
			disabled: 'rgba(184,231,231,0.5)',
			hint: 'rgba(184,231,231,0.5)',
		},
		divider: 'rgba(184,231,231,0.12)',
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'transparent',
					backdropFilter: 'blur(10px)',
					backgroundImage: 'none',
				},
			},
		},
		MuiTooltip: {
			arrow: true,
		},
	},
});
