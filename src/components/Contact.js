import React from 'react';
import {
	Box,
	Container,
	Divider,
	IconButton,
	Link,
	Typography,
} from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { contactText, sections } from '../data/text';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

export default function Contact() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const text = contactText[selectedLanguage];
	const title = sections[selectedLanguage][2];

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
				<Divider textAlign="center" sx={{ marginBottom: 10 }}>
					<Typography variant="h2">{text.Title}</Typography>
				</Divider>
				<Typography
					variant="h5"
					sx={{ marginInline: 10 }}
					align="center"
				>
					<Link
						href="mailto:ravi.bossema@gmail.com"
						target="_blank"
						underline="hover"
					>
						ravi.bossema@gmail.com
					</Link>
					<br />
					<br />
					<IconButton
						aria-label="GitHub"
						href={'https://github.com/Ravi-Bossema'}
						target="_blank"
						sx={{ height: 80, width: 80, fontSize: 60 }}
					>
						<GitHub color="secondary" fontSize="inherit" />
					</IconButton>
					<IconButton
						aria-label="Twitter"
						href={'https://twitter.com/mr_flopflop'}
						target="_blank"
						sx={{ height: 80, width: 80, fontSize: 60 }}
					>
						<Twitter color="secondary" fontSize="inherit" />
					</IconButton>
					<IconButton
						aria-label="LinkedIn"
						href={'www.linkedin.com/in/ravi-bossema-06bb2015a'}
						target="_blank"
						sx={{ height: 80, width: 80, fontSize: 60 }}
					>
						<LinkedIn color="secondary" fontSize="inherit" />
					</IconButton>
				</Typography>
			</Container>
		</Box>
	);
}
