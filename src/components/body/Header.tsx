import React from 'react';
import { HiCodeBracketSquare } from 'react-icons/hi2';
import ScrollIntoView from 'react-scroll-into-view';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Header() {
	const { height, width } = useWindowDimensions();
	return (
		<section className='home'>
			<header>
				<code>Ryan Reeves</code>

				<h1>{`{ Web Developer }`}</h1>

				<h4>
					React.js <span>|</span> TypeScript <span>|</span> Node.js
				</h4>
			</header>

			<section className='home-menu'>
				<ScrollIntoView selector='.portfolio'>
					<button
						className='home-button'
						id='projects-button'
						aria-label='projects button'>
						Projects
					</button>
				</ScrollIntoView>

				<ScrollIntoView selector='.contact'>
					<button
						className='home-button'
						id='contact-button'
						aria-label='contact button'>
						Contact
					</button>
				</ScrollIntoView>
			</section>
		</section>
	);
}
