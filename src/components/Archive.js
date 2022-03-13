import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, IconButton, styled, Typography } from '@mui/material';
import { archiveText } from '../data/text';
import { projects } from '../data/projects';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { AppleStore, GooglePlay } from '../images/icons';

export default function Archive() {
	const { languages } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const padding = 20;
	const height = window.innerHeight - 16 * padding;

	const text = archiveText[selectedLanguage];
	const data = projects;
	const rows = data.map((row, id) => Object.assign(row, { id }));

	function renderHeader(params) {
		return <Typography variant="h6">{params.colDef.headerName}</Typography>;
	}

	function renderTitle(params) {
		return (
			<Typography variant="body1" fontWeight={'bold'}>
				{params.value[selectedLanguage]}
			</Typography>
		);
	}

	function renderTech(params) {
		return (
			<Typography variant="overline" color="text.secondary">
				{params.value.join(' | ')}
			</Typography>
		);
	}

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
						<GitHub color="secondary" fontSize="inherit" />
					</IconButton>
				) : null}
				{params.value.url ? (
					<IconButton
						aria-label="URL"
						href={params.value.url}
						target="_blank"
						size="large"
					>
						<OpenInNew color="secondary" fontSize="inherit" />
					</IconButton>
				) : null}
				{params.value.play ? (
					<IconButton
						aria-label="Google Play"
						href={params.value.play}
						target="_blank"
						size="large"
					>
						<GooglePlay color="secondary" fontSize="inherit" />
					</IconButton>
				) : null}
				{params.value.play ? (
					<IconButton
						aria-label="Apple App store"
						href={params.value.apple}
						target="_blank"
						size="large"
					>
						<AppleStore color="secondary" fontSize="inherit" />
					</IconButton>
				) : null}
			</>
		);
	}

	const columns = [
		{
			field: 'Year',
			headerName: text.Year,
			type: 'date',
			flex: 0.05,
			sortable: false,
			renderHeader: renderHeader,
		},
		{
			field: 'Title',
			headerName: text.Title,
			flex: 0.25,
			sortable: false,
			renderHeader: renderHeader,
			renderCell: renderTitle,
		},
		{
			field: 'Tech',
			headerName: text.Tech,
			flex: 0.5,
			sortable: false,
			renderHeader: renderHeader,
			renderCell: renderTech,
		},
		{
			field: 'Links',
			headerName: text.Link,
			flex: 0.12,
			sortable: false,
			renderHeader: renderHeader,
			renderCell: renderLinks,
		},
	];

	const StyledDataGrid = styled(DataGrid)`
		&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
		&.MuiDataGrid-root .MuiDataGrid-cell:focus {
			outline: none;
		}
		&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer {
			padding: 0;
		}
		&.MuiDataGrid-root .MuiDataGrid-columnSeparator {
			display: none;
		}
	`;

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				padding: padding,
				minHeight: height,
			}}
		>
			<Container
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography variant="h1" paragraph>
					{text.Archive}
				</Typography>
				<Typography variant="h6" paragraph>
					{text.Intro}
				</Typography>
				<br />
				<StyledDataGrid
					sx={{ border: 'none' }}
					columns={columns}
					rows={rows}
					initialState={{
						sorting: {
							sortModel: [{ field: 'Year', sort: 'desc' }],
						},
					}}
					autoHeight
					disableColumnMenu
					disableSelectionOnClick
					hideFooterPagination
				/>
			</Container>
		</Box>
	);
}
