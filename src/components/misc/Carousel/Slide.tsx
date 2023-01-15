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
}

export default function Slide({ project }: SlideProps) {
	return (
		<div className='slide'>
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
