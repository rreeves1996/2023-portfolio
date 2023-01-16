import React, { useRef } from 'react';
import { HiMail } from 'react-icons/hi';
import ScrollIntoView from 'react-scroll-into-view';

export default function Contact() {
	return (
		<section className='contact page'>
			<section className='title'>
				<h2>Contact</h2>
				<ScrollIntoView selector='.contact'>
					<button>
						<HiMail />
					</button>
				</ScrollIntoView>
			</section>
		</section>
	);
}
