import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import portrait from '../../assets/images/me.png';
import 'swiper/css';

export default function About() {
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
						<p>
							<strong>
								Born in 1996 in Seattle, Washington, my biggest interests in
								life have always been in music and tech.{' '}
							</strong>
						</p>
						<p>
							I am grateful to say that I've built my life in a way where I now
							have the opportunity to be involved with both, extensively -{' '}
							<strong>everyday.</strong>
						</p>
						<p>
							Though I excelled and enjoyed my time in masonry, my interest in
							tech was piqued after hearing about how happy many tech workers
							were. I was also curious because I had actually spent some time
							coding in my youth already. I decided to register for a Full-Stack
							Web Development bootcamp at the University of Washington, and
							through the course I discovered that I'd like to begin a career in
							Front End Development. Since graduating on September 17th, 2022,
							I've been immersing myself in Front End Development, learning the
							practices and technologies being used today to prepare myself for
							my first position in Front End Development.
						</p>
					</div>
				</div>
			</header>
		</div>
	);
}
