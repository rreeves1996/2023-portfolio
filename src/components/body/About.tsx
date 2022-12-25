import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

export default function About() {
	return (
		<div className='about'>
			<header>
				<h2>About me...</h2>
				<a href='/about'>
					See more <AiOutlineDoubleRight />
				</a>
			</header>
		</div>
	);
}
