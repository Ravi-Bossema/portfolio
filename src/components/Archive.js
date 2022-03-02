import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, IconButton, styled, Typography } from '@mui/material';
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

	function renderHeader(params) {
		return <Typography variant="h6">{params.colDef.headerName}</Typography>;
	}

	function renderTech(params) {
		return (
			<Typography variant="overline">
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

	const columns = [
		{
			field: 'Year',
			headerName: 'Year',
			type: 'date',
			flex: 0.05,
			sortable: false,
			renderHeader: renderHeader,
		},
		{
			field: 'Title',
			headerName: 'Title',
			flex: 0.2,
			sortable: false,
			renderHeader: renderHeader,
		},
		{
			field: 'Tech',
			headerName: 'Built with',
			flex: 0.55,
			sortable: false,
			renderHeader: renderHeader,
			renderCell: renderTech,
		},
		{
			field: 'Links',
			headerName: 'Link',
			flex: 0.15,
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
			<Container sx={{ height: '100%', display: 'flex' }}>
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
