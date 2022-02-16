import { ThemeProvider } from '@mui/material';
import React from 'react';
import { About, Navbar, Projects } from './components';
import { theme } from './theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<About />
			<Projects />
		</ThemeProvider>
	);
}
