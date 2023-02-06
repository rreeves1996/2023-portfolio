import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import ScrollIntoView from 'react-scroll-into-view';
import { FaUser, FaFolder } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<nav>
			<div className='logo'>
				<h2>rreeves</h2>
				<h3>dev</h3>
			</div>
			<button
				className='resume-button'
				onClick={() =>
					location.pathname === '/' ? navigate('/resume') : navigate('')
				}>
				{location.pathname === '/' ? 'Resume' : 'Go Back'}
			</button>
			<Menu itemListElement='div' disableAutoFocus right>
				<header>
					<h3>Navigation</h3>
				</header>
				<ScrollIntoView selector='.home'>
					<div
						className='nav-button'
						id='home-link'
						onClick={() => {
							if (location.pathname === '/resume') navigate('/');
						}}>
						<IoHome />
						<h6>Home</h6>
					</div>
				</ScrollIntoView>
				{location.pathname === '/' ? (
					<>
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
					</>
				) : null}
			</Menu>
		</nav>
	);
}
