import React from 'react';
import {
	AppBar,
	Box,
	Button,
	Slide,
	Toolbar,
	useScrollTrigger,
} from '@mui/material';
import { LanguageSelect } from '.';
import { sections } from '../data/text';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';

export default function Navbar() {
	const scrollTrigger = useScrollTrigger();

	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	return (
		<Slide in={!scrollTrigger}>
			<AppBar>
				<Toolbar>
					{sections[selectedLanguage].map((section, i) => {
						return (
							<Button
								key={i}
								color="inherit"
								sx={{ flex: 0.25, maxWidth: 200 }}
								href={'.#' + section}
							>
								{section}
							</Button>
						);
					})}
					<Box sx={{ flex: 1 }} />
					<LanguageSelect sx={{ flex: 0.4, maxWidth: 200 }} />
				</Toolbar>
			</AppBar>
		</Slide>
	);
}
