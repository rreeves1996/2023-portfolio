import React from 'react';

interface SlideProps {
	project: {
		deployment: string;
		github: string;
		img: string;
		title: string;
		subtitle: string;
		desc: string[];
	};
	id: number;
}

export default function Slide({ project, id }: SlideProps) {
	return (
		<a className='slide' data-id={id} target='_blank' href={project.deployment}>
			<img src={project.img} alt='slide-img' />
		</a>
	);
}
