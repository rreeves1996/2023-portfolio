import React, { useState } from 'react';
import { v4 } from 'uuid';
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';
import { GoEllipsis } from 'react-icons/go';
import portrait from '../../assets/images/me.png';
import ScrollIntoView from 'react-scroll-into-view';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SLIDES = [
	<p
		key={v4()}
		className='p-section'
		style={{ opacity: '1', marginBottom: '0' }}>
		<strong>
			Born in 1996 in Seattle, Washington, my biggest interests in life have
			always been in music and tech.
		</strong>
	</p>,
	<p
		key={v4()}
		className='p-section'
		style={{ margin: '0 auto', textAlign: 'left' }}>
		I am grateful to say that I've built my life in a way where I now have the
		opportunity to be involved with both heavily everyday!
	</p>,
	<p
		key={v4()}
		className='p-section'
		style={{ margin: '0 auto', textAlign: 'left' }}>
		Since graduating my Full-Stack Development boot camp on September 17th,
		2022, I've been unrelenting in my learning, making significant strides
		everyday.
	</p>,
	<p
		key={v4()}
		className='p-section'
		style={{ margin: '0 auto', textAlign: 'left' }}>
		Today, I teach music by day and learn by night, doing everything I can to
		continue to progress as a developer and further my skillset. 🌠
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
							aria-label='ellipsis button'
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
							<GoEllipsis />
						</button>
					</div>
				</div>
			</header>
		</section>
	);
}
