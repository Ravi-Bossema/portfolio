import React, { useState } from 'react';

const availableLanguages = [
	{ name: 'English', selected: true },
	{ name: 'Nederlands', selected: false },
];

const LanguageContext = React.createContext();

const LanguageProvider = (props) => {
	const [languages, updateLanguage] = useState([...availableLanguages]);

	// Add Persistent Language Support

	return (
		<LanguageContext.Provider
			value={{
				languages,
				setLanguage: (name) => {
					updateLanguage((prevState) => {
						return prevState.map((item) => {
							if (item?.name === name) {
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
export { availableLanguages, getSelectedLanguage };
const useLanguage = () => React.useContext(LanguageContext);
export { LanguageContext, useLanguage };
export default LanguageProvider;
