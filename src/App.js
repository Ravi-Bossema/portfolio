import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { About, Intro, Navbar, Projects } from './components';
import { BardTheme } from './theme';

export default function App() {
	return (
		<ThemeProvider theme={BardTheme}>
			<Intro />
			<Navbar />
			<About />
			<Projects />
		</ThemeProvider>
	);
}
