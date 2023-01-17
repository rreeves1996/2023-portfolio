import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
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
	const handleSlideLeft = () => {
		const slides = Array.from(
			document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>
		);

		slides.forEach((slide) => {
			const slideDataID = parseInt(slide.getAttribute('data-id')!);
			let slidePos = slideDataID - 2;

			slidePos--;
			if (slidePos < -2) {
				slide.style.transform = `translateX(${slidePos * 100 + 500}%)`;
				slide.setAttribute('data-id', '4');
				slide.style.zIndex = '0';
			} else {
				slide.style.transform = `translateX(${slidePos * 100}%)`;
				slide.setAttribute('data-id', JSON.stringify(slidePos + 2));
				slide.style.zIndex = '3';
			}
		});

		currentSlide === 4
			? handleChangeSlide(0)
			: handleChangeSlide(currentSlide + 1);
	};

	const handleSlideRight = () => {
		const slides = Array.from(
			document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>
		);

		slides.forEach((slide) => {
			const slideDataID = parseInt(slide.getAttribute('data-id')!);
			let slidePos = slideDataID - 2;

			slidePos++;
			if (slidePos > 2) {
				slide.style.transform = `translateX(${slidePos * 100 - 500}%)`;
				slide.setAttribute('data-id', '0');
				slide.style.zIndex = '0';
			} else {
				slide.style.transform = `translateX(${slidePos * 100}%)`;
				slide.setAttribute('data-id', JSON.stringify(slidePos + 2));
				slide.style.zIndex = '3';
			}
		});

		currentSlide === 0
			? handleChangeSlide(4)
			: handleChangeSlide(currentSlide - 1);
	};

	return (
		<div className='carousel'>
			<button
				onClick={() => handleSlideRight()}
				className='carousel-button left-btn'>
				<FaCaretLeft />
			</button>

			<div className='slide-container'>{children}</div>

			<button
				onClick={() => handleSlideLeft()}
				className='carousel-button right-btn'>
				<FaCaretRight />
			</button>
		</div>
	);
}
