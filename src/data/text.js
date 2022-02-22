import { Link } from '@mui/material';

export const sections = {
	English: ['About', 'Projects', 'Experience', 'Contact'],
	Nederlands: ['Over mij', 'Projecten', 'Ervaring', 'Contact'],
};

export const introText = {
	English: {
		Hi: 'Hi,',
		Im: "I'm Ravi,",
		Dev: 'Software Developer',
		Body: [
			'I design and build custom software solutions to various problems. ',
			'I am currently developing mobile applications using React Native at ',
			<Link
				href="https://www.magnus.nl"
				target="_blank"
				underline="hover"
			>
				Magnus
			</Link>,
			'.',
		],
	},
	Nederlands: {
		Hi: 'Hoi,',
		Im: 'Ik ben Ravi,',
		Dev: 'Software Developer',
		Body: [
			'Ik ontwerp en ontwikkel op maat gemaakte software oplossingen voor verschillende problemen. ',
			'Op het moment ontwikkel ik mobiele applicaties met React Native bij ',
			<Link
				href="https://www.magnus.nl"
				target="_blank"
				underline="hover"
			>
				Magnus
			</Link>,
			'.',
		],
	},
};

export const aboutText = {
	English: {
		Title: 'About',
		Body: [
			"For as long as I can remember I've had a strong passion for making things. ",
			'Whether it was building Legos, sculpting with clay, or drawing pictures, I loved it. ',
			'And I still do, although now I pursue that creative passion in the field of Software Development.',
			<br />,
			<br />,
			'In addition to making things, I also love playing all sorts of games; ',
			'from sports- to tabletop games and everything in between. ',
			'Considering these two interests it should come as no surprise that I aspire to enter the world of Game Development. ',
			<br />,
			<br />,
			"Now, with a Bachelor's Degree in Artificial Intelligence under my belt, I feel that it's about time to make that dream a reality.",
		],
	},
	Nederlands: {
		Title: 'Over mij',
		Body: [
			'Al zolang ik mij kan herinneren heb ik een sterke passie gehad voor dingen maken. ',
			'Of het nou ging om bouwen met Legos, lekker kleien, of tekenen, ik hield er van. ',
			'En dat doe ik nogsteeds, al streef ik deze creatieve passie nu na in het gebied van Software Development.',
			<br />,
			<br />,
			'Naast dingen maken hou ik ook erg van allerlei soorten spellen; ',
			'van sport- tot bordspellen en alles er tussenin. ',
			'Met deze intresses is het dan ook geen verassing dat ik ernaar streef om de wereld van de Game Development in te gaan. ',
			<br />,
			<br />,
			'Nu, met een Bachelordiploma in Artificial Intelligence op zak, vind ik het hoog tijd om van die droom een waarheid te maken.',
		],
	},
};

export const projectsText = {
	English: {
		Title: 'Projects',
	},
	Nederlands: {
		Title: 'Projecten',
	},
};
