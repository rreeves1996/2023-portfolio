import React from 'react';

interface SlideProps {
	project: {
		deployment: string;
		github: string;
		img: string;
		title: string;
		subtitle: string;
		desc: string;
	};
	id: number;
}

export default function Slide({ project, id }: SlideProps) {
	return (
		<div className='slide' data-id={id}>
			<img src={project.img} alt='slide' />
			<div className='button-container'>
				<button onClick={() => (window.location.href = project.deployment)}>
					Deployment
				</button>
				<button onClick={() => (window.location.href = project.github)}>
					Repo
				</button>
			</div>
		</div>
	);
}
