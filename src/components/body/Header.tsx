import React from 'react';
import { HiCodeBracketSquare } from 'react-icons/hi2';
import ScrollIntoView from 'react-scroll-into-view';

export default function Header() {
	return (
		<section className='home'>
			<header>
				<code>{`Ryan Reeves`}</code>

				<h1>{`{ Front-End Developer }`}</h1>

				<h4>React.js | TypeScript | Node.js</h4>
			</header>

			<section className='home-menu'>
				<ScrollIntoView selector='.portfolio'>
					<button
						className='home-button'
						id='projects-button'
						aria-role='projects button'>
						Projects
					</button>
				</ScrollIntoView>

				<ScrollIntoView selector='.contact'>
					<button
						className='home-button'
						id='contact-button'
						aria-role='contact button'>
						Contact
					</button>
				</ScrollIntoView>
			</section>
		</section>
	);
}
