import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './assets/style/style.css';
import Home from './components/body/Home';
import About from './components/body/About';
import Portfolio from './components/body/Portfolio';
import Contact from './components/body/Contact';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Home />
				<About />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
