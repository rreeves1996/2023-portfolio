import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ScrollIntoView from 'react-scroll-into-view';
import { FaUser, FaFolder } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';

export default function Navbar() {
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
			{/* <div>
				<h6>(site still under construction!)</h6>
			</div> */}
			<button className='resume-button'>Resume</button>
			<Menu itemListElement='div' disableAutoFocus right>
				<header>
					<h3>Navigation</h3>
				</header>
				<ScrollIntoView selector='.home'>
					<div className='nav-button' id='home-link'>
						<IoHome />
						<h6>Home</h6>
					</div>
				</ScrollIntoView>
				<ScrollIntoView selector='.about'>
					<div className='nav-button' id='about-link'>
						<FaUser />
						<h6>About</h6>
					</div>
				</ScrollIntoView>
				<ScrollIntoView selector='.portfolio'>
					<div className='nav-button' id='projects-link'>
						<FaFolder />
						<h6>Projects</h6>
					</div>
				</ScrollIntoView>
				<ScrollIntoView selector='.contact'>
					<div className='nav-button' id='contact-link'>
						<HiMail />
						<h6>Contact</h6>
					</div>
				</ScrollIntoView>
			</Menu>
		</nav>
	);
}
