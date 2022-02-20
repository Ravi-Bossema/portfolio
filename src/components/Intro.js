import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { introText } from '../data/text';

export default function ViewContainer() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;
	return (
		<Box
			sx={{
				minHeight: window.innerHeight,
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingTop: 20,
			}}
		>
			<Container>
				<Typography variant="h2" component="div" gutterBottom>
					{introText[selectedLanguage].Hi} <br />
					{introText[selectedLanguage].Im} <br />
					{introText[selectedLanguage].Dev}
				</Typography>
			</Container>
		</Box>
	);
}
