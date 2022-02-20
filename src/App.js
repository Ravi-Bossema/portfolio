import { ThemeProvider } from '@mui/material';
import React from 'react';
import { About, Intro, Navbar, Projects } from './components';
import { BardTheme } from './theme';
import LanguageProvider from './LanguageProvider';

export default function App() {
	return (
		<LanguageProvider>
			<ThemeProvider theme={BardTheme}>
				<Intro />
				<Navbar />
				<About />
				<Projects />
			</ThemeProvider>
		</LanguageProvider>
	);
}
