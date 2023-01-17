import React, { useEffect, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import Carousel from '../misc/Carousel/Carousel';
import Slide from '../misc/Carousel/Slide';
import TEAMEZ from '../../assets/images/teamez.png';
import TODO_LIST from '../../assets/images/todo.png';
import VIRTUAL_KEYBOARD from '../../assets/images/keyboard.png';
import TECH_BLOG from '../../assets/images/blog.png';
import WEATHER_API from '../../assets/images/weatherapi.png';
import ScrollIntoView from 'react-scroll-into-view';

interface Project {
	deployment: string;
	github: string;
	img: string;
	title: string;
	subtitle: string;
	desc: string;
}

const PROJECTS: Project[] = [
	{
		deployment: 'https://rreeves-tech-blog.herokuapp.com/',
		github: 'https://github.com/rreeves1996/tech-blog',
		img: TECH_BLOG,
		title: 'Tech Blog',
		subtitle: 'Handlebars, MySQL, Node',
		desc: '',
	},
	{
		deployment: 'https://rreeves1996.github.io/week6-hw/',
		github: 'https://github.com/rreeves1996/week6-hw',
		img: WEATHER_API,
		title: 'Weather Dashboard',
		subtitle: 'Third-Party API, JavaScript',
		desc: '',
	},
	{
		deployment: 'https://teamez.herokuapp.com/',
		github: 'https://github.com/rreeves1996/team-manager',
		img: TEAMEZ,
		title: 'TeamEZ',
		subtitle: 'React, Redux, MySQL, Node, Express',
		desc: 'TeamEZ is a full-stack app that I created on my own following my boot camp graduation. I wanted to create a full-stack app from scratch that utilized the MERN stack, so I figured out the features I wanted the app to include and came up with a pseudo-use case. It functions as a team management app to easily keep track of employees and employee info with a UI created by me.',
	},
	{
		deployment: 'https://rreeves-todo-list.herokuapp.com/',
		github: 'https://github.com/rreeves1996/todo-list',
		img: TODO_LIST,
		title: 'To-Do List',
		subtitle: 'React, Bootstrap, Node',
		desc: '',
	},
	{
		deployment: 'https://rreeves-virtual-keyboard.herokuapp.com/',
		github: 'https://github.com/rreeves1996/virtual-keyboard',
		img: VIRTUAL_KEYBOARD,
		title: 'Virtual Keyboard',
		subtitle: 'React, Node',
		desc: '',
	},
];

export default function Portfolio() {
	const [currentSlide, setCurrentSlide] = useState<number>(2);

	const handleChangeSlide = (slide: number) => {
		setCurrentSlide((prevState) => slide);
		console.log(currentSlide);
	};

	useEffect(() => {
		const slides = Array.from(
			document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>
		);

		slides.forEach((slide) => {
			const slideDataID = parseInt(slide.getAttribute('data-id')!);
			const slidePos = slideDataID - 2;

			slide.style.transform = `translateX(${slidePos * 100}%)`;
			slide.style.zIndex = '3';
		});
	}, []);
	return (
		<section className='portfolio page'>
			<section className='title'>
				<h2>Portfolio</h2>
				<ScrollIntoView selector='.portfolio'>
					<button>
						<FaFolder />
					</button>
				</ScrollIntoView>
			</section>
			<header className='carousel-container'>
				<Carousel
					currentSlide={currentSlide}
					handleChangeSlide={handleChangeSlide}>
					<>
						{PROJECTS.map((project: Project, index: number) => (
							<Slide project={project} id={index} />
						))}
					</>
				</Carousel>
			</header>
			<section className='portfolio-body'>
				<h1>{PROJECTS[currentSlide].title}</h1>
				<h5>{PROJECTS[currentSlide].subtitle}</h5>
				<div className='button-container'>
					<button
						onClick={() =>
							(window.location.href = PROJECTS[currentSlide].deployment)
						}>
						Deployment
					</button>
					<div className='divider' />
					<button
						onClick={() =>
							(window.location.href = PROJECTS[currentSlide].github)
						}>
						Repository
					</button>
				</div>
				<p>{PROJECTS[currentSlide].desc}</p>
			</section>
		</section>
	);
}
