import React from 'react';
import { About, Navbar, Projects } from './components';

export default function App() {
	const hump = 15;
	return (
		<main style={{ height: hump }}>
			<Navbar />
			<About />
			<Projects />
		</main>
	);
}
