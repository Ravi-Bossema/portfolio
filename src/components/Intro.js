import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function ViewContainer() {
	return (
		<Box
			sx={{
				minHeight: window.innerHeight,
				bgcolor: 'background.default',
				color: 'text.primary',
				paddingTop: 20,
			}}
		>
			<Container>
				<Typography variant="h2" component="div" gutterBottom>
					Hi, <br />
					I'm Ravi, <br />
					Software Developer
				</Typography>
			</Container>
		</Box>
	);
}
