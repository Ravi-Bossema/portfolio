import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useLanguage, getSelectedLanguage } from '../LanguageProvider';

export default function LanguageSelect(props) {
	const { languages, setLanguage } = useLanguage();
	const selectedLanguage = getSelectedLanguage(languages)[0].name;

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};
	return (
		<Select
			sx={props.sx}
			value={selectedLanguage}
			onChange={handleLanguageChange}
		>
			{languages.map((lang, i) => {
				return (
					<MenuItem key={i} value={lang.name}>
						{lang.name}
					</MenuItem>
				);
			})}
		</Select>
	);
}
