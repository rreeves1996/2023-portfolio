import React from 'react';
import Slide from './Slide';
import Placeholder from '../../../assets/images/placeholder.png';

interface Project {
	github: string;
	img: string;
	title: string;
	subtitle: string;
	desc: string;
}

const PROJECTS: Project[] = [
	{
		github: 'https://rreeves-tech-blog.herokuapp.com/',
		img: Placeholder,
		title: 'Tech Blog',
		subtitle: 'Handlebars, MySQL, Node',
		desc: '',
	},
	{
		github: 'https://github.com/rreeves1996/week6-hw',
		img: Placeholder,
		title: 'Weather Dashboard',
		subtitle: 'Third-Party API, JavaScript',
		desc: '',
	},
	{
		github: 'https://teamez.herokuapp.com/',
		img: Placeholder,
		title: 'TeamEZ - Team Manager',
		subtitle: 'React, Redux, MySQL, Node',
		desc: '',
	},
	{
		github: 'https://rreeves-todo-list.herokuapp.com/',
		img: Placeholder,
		title: 'To-Do List',
		subtitle: 'React, Bootstrap, Node',
		desc: '',
	},
	{
		github: 'https://rreeves-virtual-keyboard.herokuapp.com/',
		img: Placeholder,
		title: 'Virtual Keyboard',
		subtitle: 'React, Node',
		desc: '',
	},
];

export default function Carousel() {
	return (
		<div className='carousel'>
			<button className='carousel-button'>❬</button>
			<button className='carousel-button'>❭</button>
			<div className='slide-container'>
				{PROJECTS.map((project: Project) => (
					<Slide project={project} />
				))}
			</div>
		</div>
	);
}
