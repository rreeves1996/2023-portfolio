import React, { useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';
import { GoEllipsis } from 'react-icons/go';
import portrait from '../../assets/images/me.png';
import ScrollIntoView from 'react-scroll-into-view';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SLIDES = [
	<p className='p-section' style={{ opacity: '1', marginBottom: '1.5rem' }}>
		<strong>
			Born in 1996 in Seattle, Washington, my biggest interests in life have
			always been in music and tech.
		</strong>
	</p>,
	<p className='p-section' style={{ margin: '0 auto', textAlign: 'left' }}>
		I am grateful to say that I've built my life in a way where I now have the
		opportunity to be involved with both heavily everyday!
	</p>,
	<p className='p-section' style={{ margin: '0 auto', textAlign: 'left' }}>
		Since graduating my Full-Stack Development boot camp on September 17th,
		2022, I've been unrelenting in my learning, making significant strides
		everyday.
	</p>,
	<p className='p-section' style={{ margin: '0 auto', textAlign: 'left' }}>
		Today, I teach music by day and learn by night, doing everything I can to
		become the proficient developer I was born to be. 🌠
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
					<h1>Learner, musician, designer </h1>

					<div
						className='about-body'
						style={{
							height:
								width >= 768
									? `${80 + 80 * currentSlide}px`
									: currentSlide === 4
									? '510px'
									: `${55 + 140 * currentSlide}px`,
						}}>
						{SLIDES.map((slide) => slide)}

						<button
							onClick={() => handleAddSlide()}
							style={{
								opacity: currentSlide > 3 ? 0 : 1,
								transform:
									width >= 768
										? `translateY(${-370 + 95 * currentSlide}px)`
										: width >= 376
										? `translateY(${-250 + 140 * currentSlide}px)`
										: `translateY(${-300 + 100 * currentSlide}px)`,
							}}>
							<GoEllipsis aria-role='ellipsis button' />
						</button>
					</div>
				</div>
			</header>
		</section>
	);
}
