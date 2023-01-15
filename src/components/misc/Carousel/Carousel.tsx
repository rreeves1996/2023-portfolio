import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Slide from './Slide';

type Props = {
	children: JSX.Element;
};

export default function Carousel({ children }: Props) {
	return (
		<div className='carousel'>
			<button className='carousel-button'>❬</button>
			<button className='carousel-button'>❭</button>
			<div className='slide-container'>{children}</div>
		</div>
	);
}
