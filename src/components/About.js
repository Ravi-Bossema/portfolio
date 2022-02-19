import React from 'react';
import { useState } from 'react';
import { Box, Card, Container, Divider, Typography } from '@mui/material';

export default function About() {
	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingBlock: 20,
			}}
		>
			<Container>
				<Typography variant="h2" component="div" gutterBottom>
					About
				</Typography>
				<Divider />
				Some text here
			</Container>
		</Box>
	);
}
