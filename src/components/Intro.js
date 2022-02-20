import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { introText } from '../data/text';

export default function ViewContainer() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;
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
					{introText[selectedLanguage].Hi} <br />
					{introText[selectedLanguage].Im} <br />
					{introText[selectedLanguage].Dev}
				</Typography>
				<Typography variant="h5">
					{introText[selectedLanguage].Text}
					<Link
						href="https://www.magnus.nl"
						variant="h5"
						underline="hover"
					>
						Magnus
					</Link>
					.
				</Typography>
			</Container>
		</Box>
	);
}
