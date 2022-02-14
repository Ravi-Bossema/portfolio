import React from 'react';
import { useState } from 'react';
import {
	AppBar,
	Box,
	Button,
	MenuItem,
	Select,
	Slide,
	Toolbar,
	useScrollTrigger,
} from '@mui/material';
import { ThemeSwitch } from '.';

export default function Navbar() {
	const scrollTrigger = useScrollTrigger();

	// --- Change for functionality ---
	const sections = ['About', 'Projects', 'Experience', 'Contact'];
	const languages = ['English', 'Nederlands'];

	const [language, setLanguage] = useState('English');

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};
	// ---------------

	return (
		<Slide in={!scrollTrigger}>
			<AppBar>
				<Toolbar>
					{sections.map((section, i) => {
						return (
							<Button
								key={i}
								color="inherit"
								sx={{ flex: 0.25, maxWidth: 200 }}
							>
								{section}
							</Button>
						);
					})}
					<Box sx={{ flex: 1 }} />
					<Select
						sx={{ flex: 0.4, maxWidth: 200 }}
						labelId="demo-simple-select-disabled-label"
						id="demo-simple-select-disabled"
						value={language}
						label="Language"
						onChange={handleLanguageChange}
					>
						{languages.map((lang) => {
							return <MenuItem value={lang}>{lang}</MenuItem>;
						})}
					</Select>
					<Box sx={{ flex: 0.15, paddingLeft: 2 }}>
						<ThemeSwitch />
					</Box>
				</Toolbar>
			</AppBar>
		</Slide>
	);
}
