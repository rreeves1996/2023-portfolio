import React, { useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';
import { GoEllipsis } from 'react-icons/go';
import portrait from '../../assets/images/me.png';
import ScrollIntoView from 'react-scroll-into-view';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SLIDES = [
	<p className='p-section' style={{ opacity: '1' }}>
		<strong>
			Born in 1996 in Seattle, Washington, my biggest interests in life have
			always been in music and tech.{' '}
		</strong>
	</p>,
	<p className='p-section'>
		I am grateful to say that I've built my life in a way where I now have the
		opportunity to be involved with both heavily day-to-day!
	</p>,
	<p className='p-section'>
		Since graduating my Full-Stack Development boot camp on September 17th, I've
		narrowed my focus into Front-End Development, primarily React.
	</p>,
	<p className='p-section'>
		Today, I play with rocks and bricks by day and program by night, eagerly
		awaiting my first position in Front-End Development. 🗿
	</p>,
];

export default function About() {
	const { height, width } = useWindowDimensions();
	const [currentSlide, setCurrentSlide] = useState<number>(1);

	const handleAddSlide = () => {
		const sections: NodeListOf<HTMLElement> =
			document.querySelectorAll('.p-section');

		sections[currentSlide].style.opacity = '1';
		setCurrentSlide((prevState) => currentSlide + 1);
	};

	return (
		<section className='about page'>
			<section className='title'>
				<h2>About me...</h2>
				<ScrollIntoView selector='.about'>
					<button>
						<HiMagnifyingGlassCircle />
					</button>
				</ScrollIntoView>
			</section>
			<header>
				<div className='img-wrapper'>
					<img src={portrait} alt='portrait' className='portrait' />
				</div>
				<div className='about-text'>
					<h1>Learner, musician, engineer </h1>
					<div
						className='about-body'
						style={{
							height:
								width >= 768
									? `${80 + 80 * currentSlide}px`
									: `${80 + 130 * currentSlide}px`,
						}}>
						{SLIDES.map((slide) => slide)}
						<button
							onClick={() => handleAddSlide()}
							style={{
								opacity: currentSlide > 3 ? 0 : 1,
								transform:
									width >= 768
										? `translateY(${-320 + 80 * currentSlide}px)`
										: `translateY(${-410 + 145 * currentSlide}px)`,
							}}>
							<GoEllipsis />
						</button>
					</div>
				</div>
			</header>
		</section>
	);
}
