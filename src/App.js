import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BardTheme } from './theme';
import LanguageProvider from './LanguageProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
	return (
		<LanguageProvider>
			<ThemeProvider theme={BardTheme}>
				<BrowserRouter>
					<Routes>
						<Route index element={<MainPage />} />
						<Route path="archive" element={<ProjectsPage />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</LanguageProvider>
	);
}
