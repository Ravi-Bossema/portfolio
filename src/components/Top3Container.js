import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';

export default function Top3Container({ Project, left }) {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const { Title, Summary, Tech, Git, Url, Img } = Project;

	return left ? (
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
				style={{
					borderRadius: 4,
					width: 600,
					boxShadow: '10px 10px #b8e7e7',
				}}
			/>
			<Box
				sx={{
					textAlign: 'right',
					position: 'absolute',
					right: 0,
					width: 460,
					height: 400,
					zIndex: 999,
				}}
			>
				<Typography
					sx={{
						position: 'absolute',
						top: 20,
						right: 0,
					}}
					variant="h4"
				>
					{Title[selectedLanguage]}
				</Typography>
				<Card
					sx={{
						position: 'absolute',
						top: '50%',
						right: 20,
						msTransform: 'translateY(-50%)',
						transform: 'translateY(-50%)',
					}}
				>
					<CardContent>
						<Typography variant="body1">
							{Summary[selectedLanguage]}
						</Typography>
					</CardContent>
				</Card>
				<Typography
					sx={{
						position: 'absolute',
						bottom: 70,
						right: 10,
					}}
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
				<IconButton
					aria-label="GitHub"
					href={Git}
					target="_blank"
					sx={{
						position: 'absolute',
						bottom: 25,
						right: 10,
					}}
					size="large"
				>
					<GitHub color="primary" fontSize="inherit" />
				</IconButton>
				{Url ? (
					<IconButton
						aria-label="URL"
						href={Url}
						target="_blank"
						sx={{
							position: 'absolute',
							bottom: 25,
							right: 60,
						}}
						size="large"
					>
						<OpenInNew color="primary" fontSize="inherit" />
					</IconButton>
				) : null}
			</Box>
		</Box>
	) : (
		<Box
			sx={{
				display: 'flex',
				marginLeft: 10,
				marginRight: 10,
				position: 'relative',
				height: 400,
			}}
		>
			<img
				src={Img}
				alt={Title[selectedLanguage]}
				style={{
					borderRadius: 4,
					width: 600,
					height: 400,
					position: 'absolute',
					right: 0,
					boxShadow: '-10px 10px #b8e7e7',
				}}
			/>
			<Box
				sx={{
					position: 'relative',
					width: 460,
					zIndex: 999,
				}}
			>
				<Typography
					sx={{
						position: 'absolute',
						top: 20,
						left: 0,
					}}
					variant="h4"
				>
					{Title[selectedLanguage]}
				</Typography>
				<Card
					sx={{
						position: 'absolute',
						top: '50%',
						left: 20,
						msTransform: 'translateY(-50%)',
						transform: 'translateY(-50%)',
					}}
				>
					<CardContent>
						<Typography variant="body1">
							{Summary[selectedLanguage]}
						</Typography>
					</CardContent>
				</Card>
				<Typography
					sx={{
						position: 'absolute',
						bottom: 70,
						left: 10,
					}}
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

				{Url ? (
					<>
						<IconButton
							aria-label="GitHub"
							href={Git}
							target="_blank"
							sx={{
								position: 'absolute',
								bottom: 25,
								left: 60,
							}}
							size="large"
						>
							<GitHub color="primary" fontSize="inherit" />
						</IconButton>
						<IconButton
							aria-label="U"
							href={Url}
							target="_blank"
							sx={{
								position: 'absolute',
								bottom: 25,
								left: 10,
							}}
							size="large"
						>
							<OpenInNew color="primary" fontSize="inherit" />
						</IconButton>
					</>
				) : (
					<IconButton
						aria-label="GitHub"
						href={Git}
						target="_blank"
						sx={{
							position: 'absolute',
							bottom: 25,
							left: 10,
						}}
						size="large"
					>
						<GitHub color="primary" fontSize="inherit" />
					</IconButton>
				)}
			</Box>
		</Box>
	);
}
