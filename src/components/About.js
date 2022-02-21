import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Typography,
} from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { aboutText } from '../data/text';
import ProfilePicture from '../images/ProfilePicture.jpeg';

export default function About() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const text = aboutText[selectedLanguage];

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingBlock: 20,
			}}
		>
			<Container>
				<Divider textAlign="right">
					<Typography variant="h2">{text.Title}</Typography>
				</Divider>
				<Card
					sx={{
						display: 'flex',
						marginLeft: 30,
						marginRight: 10,
						minWidth: 830,
					}}
				>
					<CardContent sx={{ width: '65%', padding: 3 }}>
						<Typography variant="body1">{text.Body}</Typography>
					</CardContent>
					<CardMedia
						component="img"
						sx={{ width: '35%' }}
						image={ProfilePicture}
						alt="Profile Picture"
					/>
				</Card>
			</Container>
		</Box>
	);
}
