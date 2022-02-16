import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		type: 'dark',
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
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'transparent',
					backdropFilter: 'blur(10px)',
				},
			},
		},
		MuiTooltip: {
			arrow: true,
		},
	},
});
