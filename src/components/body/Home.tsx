import React, {useState} from 'react';
import { HiCodeBracketSquare } from 'react-icons/hi2';
import ScrollIntoView from 'react-scroll-into-view';

export default function Home() {
	const [hovered, setHovered] = useState(false);

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
					<ScrollIntoView selector='.portfolio'>
						<button className='home-button' id='projects-button'>
							Projects
						</button>
					</ScrollIntoView>
					<div className='divider' />
					<ScrollIntoView selector='.contact'>
						<button className='home-button' id='contact-button'>
							Contact
						</button>
					</ScrollIntoView>
				</div>
			</section>
		</section>
	);
}
