import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { HiCodeBracketSquare } from 'react-icons/hi2';

export default function Home() {
	return (
		<section className='home'>
			<header>
				<code>Hello! My name is</code>
				<h1>
					Ryan Reeves
					<HiCodeBracketSquare className='bracket-square' />
				</h1>
				<h4>
					I am a <strong>Front-End Developer</strong> from{' '}
					<strong>Seattle, Washington</strong>
				</h4>
			</header>
			<section>
				<div className='home-menu'>
					<h4>
						<FaChevronRight className='chevron' /> About
					</h4>
					<h4>
						<FaChevronRight className='chevron' /> Portfolio
					</h4>
					<h4>
						<FaChevronRight className='chevron' /> Contact
					</h4>
				</div>
			</section>
		</section>
	);
}
