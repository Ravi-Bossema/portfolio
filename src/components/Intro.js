import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { introText } from '../data/text';

export default function ViewContainer() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const text = introText[selectedLanguage];

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingTop: 30,
				paddingBottom: 50,
			}}
		>
			<Container>
				<Typography variant="h2" gutterBottom>
					{text.Hi} <br />
					{text.Im} <br />
					{text.Dev}
				</Typography>
				<Typography variant="h5">{text.Body}</Typography>
			</Container>
		</Box>
	);
}
