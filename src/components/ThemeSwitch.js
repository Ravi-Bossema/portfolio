import React from 'react';
import { Switch } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function ThemeSwitch(props) {
	const iconSize = 30;

	return (
		<Switch
			{...props}
			style={{ top: -5, left: -5 }}
			icon={<LightMode sx={{ fontSize: iconSize }} />}
			checkedIcon={<DarkMode sx={{ fontSize: iconSize }} />}
			defaultChecked
		/>
	);
}
