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
					<img
						src={portrait}
						alt='portrait'
						style={{ width: '30rem', borderRadius: '20px' }}
					/>
				</div>
				<div className='about-body'>
					<h3>Learner, musician, engineer, </h3>

					<p>
						Born in 1996 in Seattle, Washington, my biggest interests in life
						have always been in music and tech. Through my adolescence, large
						portion of my youth and early adulthood revolved around playing
						video games, learning to make them, exploring graphic design,
						producing music, and anything else I could do through a computer.
						The rest of my free time was spent playing, teaching, and learning
						about music!
					</p>
					<p>
						My career path led me through the trades early. In my young mind,
						since I enjoyed working on cars, I that being a mechanic would be a
						great career path for me. I attended Shoreline Community College and
						took a technical class on Automotive Technology, and had a job in
						the industry as a mechanic before I graduated in 2016. However, by
						2020, during the Coronavirus outbreak, I was already debating
						leaving the field as it was quickly killing my passion for working
						on cars. I wanted to work another trade, and through the few job
						openings that were available during the outbreak, I got a job at a
						masonry company.
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
						standard practices and different technologies being used today to
						prepare myself for my first position in Front End Development.
					</p>
				</div>
			</header>
		</div>
	);
}
