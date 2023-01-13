import React, { useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import portrait from '../../assets/images/me.png';
import 'swiper/css';

const SLIDES = [
	<p>
		<strong>
			Born in 1996 in Seattle, Washington, my biggest interests in life have
			always been in music and tech.{' '}
		</strong>
	</p>,
	<p>
		I am grateful to say that I've built my life in a way where I now have the
		opportunity to be involved with both heavily day-to-day!
	</p>,
	<p>
		Since graduating my Full-Stack Development boot camp on September 17th, I've
		narrowed my focus into Front-End Development, primarily React.
	</p>,
];

export default function About() {
	const [currentSlide, setCurrentSlide] = useState<React.ReactElement[]>([
		SLIDES[0],
	]);

	const handleAddSlide = () => {
		setCurrentSlide((prevState) => [...prevState, SLIDES[currentSlide.length]]);
	};

	return (
		<div className='about'>
			<section className='title'>
				<h2>About me...</h2>
				<a href='/about'>
					See more <AiOutlineDoubleRight />
				</a>
			</section>
			<header>
				<div className='img-wrapper'>
					<img src={portrait} alt='portrait' className='portrait' />
				</div>
				<div className='about-text'>
					<h1>Learner, musician, engineer </h1>
					<div className='about-body'>
						{currentSlide}
						<button onClick={() => handleAddSlide()}>...</button>
					</div>
				</div>
			</header>
		</div>
	);
}
