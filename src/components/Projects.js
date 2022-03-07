import React from 'react';
import { Box, Container, Divider, Link, Typography } from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { projectsText, sections } from '../data/text';
import { top3 } from '../data/projects';
import { Top3Container } from '.';

export default function Projects() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const text = projectsText[selectedLanguage];
	const title = sections[selectedLanguage][1];

	return (
		<Box
			id={title}
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingBlock: 20,
			}}
		>
			<Container>
				<Divider textAlign="left" sx={{ marginBottom: 10 }}>
					<Typography variant="h2">{title}</Typography>
				</Divider>
				<Top3Container Project={top3[0]['English']} left={true} />
				<Top3Container Project={top3[0]['English']} left={false} />
				<Typography variant="h6" align="center" sx={{ marginTop: 5 }}>
					{text.Archive}
				</Typography>
			</Container>
		</Box>
	);
}
