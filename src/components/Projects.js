import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { projectsText } from '../data/text';
import { top3 } from '../data/projects';
import { Top3Container } from '.';

export default function Projects() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const text = projectsText[selectedLanguage];

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingBlock: 20,
			}}
		>
			<Container>
				<Divider textAlign="left" sx={{ marginBottom: 10 }}>
					<Typography variant="h2">{text.Title}</Typography>
				</Divider>
				<Top3Container Project={top3[0]['English']} left={true} />
				<Top3Container Project={top3[0]['English']} left={false} />
			</Container>
		</Box>
	);
}
