import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { projects } from '../data/projects';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { GitHub, OpenInNew } from '@mui/icons-material';

export default function Archive() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const padding = 20;
	const height = window.innerHeight - 16 * padding;

	const data = projects[selectedLanguage];
	const rows = data.map((row, id) => Object.assign(row, { id }));

	function renderLinks(params) {
		return (
			<>
				{params.value.git ? (
					<IconButton
						aria-label="GitHub"
						href={params.value.git}
						target="_blank"
						size="large"
					>
						<GitHub color="primary" fontSize="inherit" />
					</IconButton>
				) : null}
				{params.value.url ? (
					<IconButton
						aria-label="URL"
						href={params.value.url}
						target="_blank"
						size="large"
					>
						<OpenInNew color="primary" fontSize="inherit" />
					</IconButton>
				) : null}
			</>
		);
	}

	function renderTech(params) {
		return (
			<Typography variant="overline">
				{params.value.join(' | ')}
			</Typography>
		);
	}

	const columns = [
		{ field: 'Year', type: 'date', flex: 0.05 },
		{ field: 'Title', flex: 0.2 },
		{
			field: 'Tech',
			headerName: 'Built with',
			flex: 0.55,
			renderCell: renderTech,
		},
		{
			field: 'Links',
			flex: 0.15,
			renderCell: renderLinks,
		},
	];

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				padding: padding,
				height: height,
			}}
		>
			<Container sx={{ height: '100%', display: 'flex' }}>
				<DataGrid columns={columns} rows={rows} />
			</Container>
		</Box>
	);
}
