import React from 'react';
import { About, Intro, Navbar, Projects } from '../components';

export default function MainPage() {
	return (
		<>
			<Intro />
			<Navbar />
			<About />
			<Projects />
		</>
	);
}
