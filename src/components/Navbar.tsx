import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import ScrollIntoView from 'react-scroll-into-view';
import { FaUser, FaFolder, FaArrowAltCircleUp, FaHome } from 'react-icons/fa';
import { TiArrowUpThick } from 'react-icons/ti';
import { HiMail } from 'react-icons/hi';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Navbar() {
	const { height, width } = useWindowDimensions();
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<nav>
			<div className='logo' onClick={() => navigate('/')}>
				<h2>{width >= 768 ? 'rreeves' : 'RR'}</h2>
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
				{location.pathname === '/resume' ? (
					<ScrollIntoView selector='.home'>
						<div
							className='nav-button'
							id='home-link'
							onClick={() => navigate('/')}>
							<FaHome />
							<h6>Home</h6>
						</div>
					</ScrollIntoView>
				) : (
					<ScrollIntoView selector='.home'>
						<div className='nav-button'>
							<FaArrowAltCircleUp />
							<h6>Back to top</h6>
						</div>
					</ScrollIntoView>
				)}
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
