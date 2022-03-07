import React from 'react';
import { About, Contact, Intro, Navbar, Projects } from '../components';

export default function MainPage() {
	return (
		<>
			<Navbar />
			<Intro />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
