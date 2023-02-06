import React from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Portfolio from './Portfolio';

export default function HomeContainer() {
	return (
		<div>
			<Header />
			<About />
			<Portfolio />
			<Contact />
		</div>
	);
}
