import React from 'react';
import Carousel from '../misc/Carousel/Carousel';

export default function Portfolio() {
	return (
		<section className='portfolio'>
			<section className='title'>
				<h2>Portfolio</h2>
			</section>
			<header className='carousel-container'>
				<Carousel />
			</header>
		</section>
	);
}
