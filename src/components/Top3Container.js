import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { AppleStore, GooglePlay } from '../images/icons';

export default function Top3Container({ Project, right }) {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const { Title, Summary, Tech, Git, Url, Play, Apple, Img } = Project;

	return (
		<Box
			sx={{
				display: 'flex',
				marginLeft: 10,
				marginRight: 10,
				marginBottom: 10,
				position: 'relative',
				height: 400,
			}}
		>
			<img
				src={Img}
				alt={Title[selectedLanguage]}
				style={
					right
						? {
								borderRadius: 4,
								width: 600,
								height: 400,
								boxShadow: '10px 10px #b8e7e7',
						  }
						: {
								borderRadius: 4,
								width: 600,
								height: 400,
								position: 'absolute',
								right: 0,
								boxShadow: '-10px 10px #b8e7e7',
						  }
				}
			/>
			<Box
				sx={
					right
						? {
								textAlign: 'right',
								position: 'absolute',
								right: 0,
								width: 460,
								height: 400,
								zIndex: 999,
						  }
						: {
								position: 'relative',
								width: 460,
								height: 400,
								zIndex: 999,
						  }
				}
			>
				<Typography
					sx={
						right
							? {
									position: 'absolute',
									top: 20,
									right: 0,
							  }
							: {
									position: 'absolute',
									top: 20,
									left: 0,
							  }
					}
					variant="h4"
				>
					{Title[selectedLanguage]}
				</Typography>
				<Card
					sx={
						right
							? {
									position: 'absolute',
									top: '50%',
									right: 20,
									msTransform: 'translateY(-50%)',
									transform: 'translateY(-50%)',
							  }
							: {
									position: 'absolute',
									top: '50%',
									left: 20,
									msTransform: 'translateY(-50%)',
									transform: 'translateY(-50%)',
							  }
					}
				>
					<CardContent>
						<Typography variant="body1">{Summary[selectedLanguage]}</Typography>
					</CardContent>
				</Card>
				<Typography
					sx={
						right
							? {
									position: 'absolute',
									bottom: 70,
									right: 10,
							  }
							: {
									position: 'absolute',
									bottom: 70,
									left: 10,
							  }
					}
					variant="overline"
				>
					{Tech.map((item, i) => {
						let x = '';
						if (i < Tech.length - 1) {
							x = ' | ';
						}
						return item + x;
					})}
				</Typography>
				<Box
					sx={
						right
							? {
									position: 'absolute',
									bottom: 25,
									right: 10,
							  }
							: {
									position: 'absolute',
									bottom: 25,
									left: 10,
							  }
					}
				>
					{Url ? (
						<IconButton aria-label="U" href={Url} target="_blank" size="large">
							<OpenInNew color="primary" fontSize="inherit" />
						</IconButton>
					) : null}
					{Git ? (
						<IconButton aria-label="GitHub" href={Git} target="_blank" size="large">
							<GitHub color="primary" fontSize="inherit" />
						</IconButton>
					) : null}
					{Play ? (
						<IconButton aria-label="Play Store" href={Play} target="_blank" size="large">
							<GooglePlay color="primary" fontSize="inherit" />
						</IconButton>
					) : null}
					{Apple ? (
						<IconButton aria-label="App Store" href={Apple} target="_blank" size="large">
							<AppleStore color="primary" fontSize="inherit" />
						</IconButton>
					) : null}
				</Box>
			</Box>
		</Box>
	);
}
