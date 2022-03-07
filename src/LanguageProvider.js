import React, { useState } from 'react';

const LanguageContext = React.createContext();

const LanguageProvider = (props) => {
	const localLanguage = localStorage.getItem('Language');

	const availableLanguages = [
		{
			name: 'English',
			selected: localLanguage ? localLanguage === 'English' : true,
		},
		{
			name: 'Nederlands',
			selected: localLanguage ? localLanguage === 'Nederlands' : false,
		},
	];
	const [languages, updateLanguage] = useState([...availableLanguages]);

	return (
		<LanguageContext.Provider
			value={{
				languages,
				setLanguage: (name) => {
					updateLanguage((prevState) => {
						return prevState.map((item) => {
							if (item?.name === name) {
								localStorage.setItem('Language', item.name);
								item.selected = true;
							} else {
								item.selected = false;
							}

							return item;
						});
					});
				},
			}}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};

const getSelectedLanguage = (lang) => lang?.filter((item) => item.selected);
export { getSelectedLanguage };
const useLanguage = () => React.useContext(LanguageContext);
export { LanguageContext, useLanguage };
export default LanguageProvider;
