import React from 'react';

interface SlideProps {
	project: {
		github: string;
		img: string;
		title: string;
		subtitle: string;
		desc: string;
	};
}

export default function Slide({ project }: SlideProps) {
	return <div className='slide'>Slide</div>;
}
