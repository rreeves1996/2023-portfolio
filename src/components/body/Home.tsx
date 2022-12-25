import React from 'react';
import { RxCaretRight } from 'react-icons/rx';
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
					<button className='home-button' id='projects-button'>
						Projects
					</button>
					<button className='home-button' id='contact-button'>
						Contact
					</button>
				</div>
			</section>
		</section>
	);
}
