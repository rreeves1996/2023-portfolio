import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Slide from './Slide';

type Props = {
	children: JSX.Element;
	currentSlide: number;
	handleChangeSlide: (slide: number) => void;
};

export default function Carousel({
	children,
	currentSlide,
	handleChangeSlide,
}: Props) {
	return (
		<div className='carousel'>
			<button
				onClick={() =>
					currentSlide === 0
						? handleChangeSlide(4)
						: handleChangeSlide(currentSlide - 1)
				}
				className='carousel-button'>
				❬
			</button>
			<button
				onClick={() =>
					currentSlide === 4
						? handleChangeSlide(0)
						: handleChangeSlide(currentSlide + 1)
				}
				className='carousel-button'>
				❭
			</button>
			<div className='slide-container'>{children}</div>
		</div>
	);
}
