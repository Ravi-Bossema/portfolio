import { ThemeProvider } from '@mui/material';
import React from 'react';
import { About, Navbar, Projects } from './components';
import { DSTheme, BardTheme } from './theme';

export default function App() {
	return (
		<ThemeProvider theme={BardTheme}>
			<Navbar />
			<About />
			<Projects />
		</ThemeProvider>
	);
}
