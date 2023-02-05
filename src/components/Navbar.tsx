import React, { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<nav>
			<div className='logo'>
				<h2>rreeves</h2>
				<h3>dev</h3>
			</div>
			{/* <div
				className='nav-burger'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div
					className={
						isHovered ? 'nav-link-container hover' : 'nav-link-container'
					}>
					<ScrollIntoView selector='.home'>
						<button className='nav-button' id='home-link'>
							Home
						</button>
					</ScrollIntoView>
					<ScrollIntoView selector='.about'>
						<button className='nav-button' id='about-link'>
							About
						</button>
					</ScrollIntoView>
					<ScrollIntoView selector='.portfolio'>
						<button className='nav-button' id='projects-link'>
							Projects
						</button>
					</ScrollIntoView>
					<ScrollIntoView selector='.portfolio'>
						<button className='nav-button' id='projects-link'>
							Resume
						</button>
					</ScrollIntoView>
					<ScrollIntoView selector='.contact'>
						<button className='nav-button' id='contact-link'>
							Contact
						</button>
					</ScrollIntoView>
				</div>
			</div> */}
			<div>
				<h6>(site still under construction!)</h6>
			</div>
		</nav>
	);
}
