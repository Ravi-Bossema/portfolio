import test from '../images/test.png';
import revolve from '../images/Revolve.gif';
import portfolio from '../images/Portfolio.png';
import thesis from './thesis.pdf';
import NN from './NN.pdf';
import { Link } from '@mui/material';

export const top3 = [
	{
		Title: { English: 'This Portfolio', Nederlands: 'Dit Portfolio' },
		Summary: {
			English: [
				'First and foremost I built this portfolio website in React ',
				'to display my projects to possible future employers and colleagues. ',
				'Much of this project was built using the ',
				<Link href="https://mui.com" target="_blank" underline="hover">
					Material UI library
				</Link>,
				' and hosted with ',
				<Link href="https://www.netlify.com" target="_blank" underline="hover">
					Netlify
				</Link>,
				' .',
			],
			Nederlands: [
				'Ten eerste heb ik deze portfolio website gebouwd in React ',
				" om mijn projecten te laten zien aan eventuele toekomstige werkgevers en collega's. ",
				'Dit project is grotendeels gemaakt met behulp van de ',
				<Link href="https://mui.com" target="_blank" underline="hover">
					Material UI library
				</Link>,
				' en gehost met ',
				<Link href="https://www.netlify.com" target="_blank" underline="hover">
					Netlify
				</Link>,
				' .',
			],
		},
		Tech: ['React', 'JavaScript', 'CSS'],
		Git: 'https://github.com/Ravi-Bossema/portfolio',
		Url: '/',
		Play: '',
		Apple: '',
		Img: portfolio,
	},
	{
		Title: {
			English: 'Simulating Underwater Robotics',
			Nederlands: ['Onderwater Robot ', <br />, ' Simulatie'],
		},
		Summary: {
			English: [
				'An implementation of underwater physics in the open-source ',
				<Link href="https://gazebosim.org" target="_blank" underline="hover">
					3D Robotics Simulator Gazebo
				</Link>,
				', specifically in the ',
				<Link href="https://github.com/ci-group/revolve" target="_blank" underline="hover">
					Robot Evolution framework Revolve
				</Link>,
				'. This was the project I wrote my Bachelors thesis on which was very well received by the professors in the VU CI-group.',
			],
			Nederlands: [
				'Een implementatie van de drijfkracht en weerstand in water in de open-source ',
				<Link href="https://gazebosim.org" target="_blank" underline="hover">
					3D Robotica Simulator Gazebo
				</Link>,
				' specifiek in de ',
				<Link href="https://github.com/ci-group/revolve" target="_blank" underline="hover">
					Robot Evolutie framework Revolve
				</Link>,
				'. Over dit project heb ik mijn Bachelor scriptie geschreven waar ik een 9.0 voor gehaald heb.',
			],
		},
		Tech: ['Python', 'C++', 'Gazebo', 'Revolve'],
		Git: 'https://github.com/Ravi-Bossema/portfolio',
		Url: thesis,
		Play: '',
		Apple: '',
		Img: revolve,
	},
	{
		Title: { English: 'Test Project', Nederlands: '' },
		Summary: {
			English:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			Nederlands: '',
		},
		Tech: ['JavaScript', 'React Native', 'Node', 'Expo'],
		Git: '',
		Url: 'https://thispersondoesnotexist.com',
		Play: 'test',
		Apple: 'test',
		Img: test,
	},
];

export const projects = [
	{
		Title: {
			English: 'ENTSO-E E Codes App',
			Nederlands: 'ENTSO-E E Codes App',
		},
		Year: 2022,
		Tech: ['React Native', 'JavaScript', 'Node.js'],
		Links: {
			git: '',
			url: '',
			play: 'https://play.google.com/store/apps/details?id=nl.magnus.energyguidelines',
			apple: 'https://apps.apple.com/nl/app/ecviewer/id1332670989',
		},
	},
	{
		Title: {
			English: 'Portfolio Website',
			Nederlands: 'Portfolio Website',
		},
		Year: 2022,
		Tech: ['React.js', 'CSS'],
		Links: {
			git: 'https://github.com/Ravi-Bossema/portfolio',
			url: '',
			play: '',
			apple: '',
		},
	},
	{
		Title: {
			English: 'Huisartsen KennisQuiz Redesign',
			Nederlands: 'Huisartsen KennisQuiz Herontwerp',
		},
		Year: 2021,
		Tech: ['HTML', 'CSS', 'JavaScript', 'jQuery-mobile', 'cordova'],
		Links: {
			git: '',
			url: '',
			play: 'https://play.google.com/store/apps/details?id=nl.huisartsopleiding.kennisquiz',
			apple: 'https://apps.apple.com/nl/app/huisarts-kennis-quiz/id878643371',
		},
	},
	{
		Title: {
			English: 'Simulating Underwater Robotics',
			Nederlands: 'Onderwater Robot Simulatie',
		},
		Year: 2021,
		Tech: ['Python', 'C++', 'Gazebo', 'Revolve'],
		Links: {
			git: 'https://github.com/Ravi-Bossema/revolve',
			url: thesis,
			play: '',
			apple: '',
		},
	},
	{
		Title: {
			English: 'Huisartsen KennisQuiz Update',
			Nederlands: 'Huisartsen KennisQuiz Update',
		},
		Year: 2020,
		Tech: ['HTML', 'CSS', 'JavaScript', 'jQuery-mobile', 'cordova'],
		Links: {
			git: '',
			url: '',
			play: 'https://play.google.com/store/apps/details?id=nl.huisartsopleiding.kennisquiz',
			apple: 'https://apps.apple.com/nl/app/huisarts-kennis-quiz/id878643371',
		},
	},
	{
		Title: {
			English: 'Neural Networks Assignment',
			Nederlands: 'Neural Networks Opdracht',
		},
		Year: 2020,
		Tech: ['Python', 'pytorch'],
		Links: {
			git: 'https://github.com/Ravi-Bossema/Neural_Networks_Assignment',
			url: NN,
			play: '',
			apple: '',
		},
	},
	{
		Title: {
			English: 'Flight Scraper',
			Nederlands: 'Flight Scraper',
		},
		Year: 2020,
		Tech: ['Python', 'selenium'],
		Links: {
			git: 'https://github.com/Ravi-Bossema/Flight_Scraper',
			url: '',
			play: '',
			apple: '',
		},
	},
];
