import React, { useEffect, useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import Carousel from '../misc/Carousel/Carousel';
import Slide from '../misc/Carousel/Slide';
import TEAMEZ from '../../assets/images/teamez.png';
import TODO_LIST from '../../assets/images/todo.png';
import VIRTUAL_KEYBOARD from '../../assets/images/keyboard.png';
import SURVEYFRIEND from '../../assets/images/surveyfriend.png';
import WEATHER_API from '../../assets/images/weather.png';
import ScrollIntoView from 'react-scroll-into-view';

type Project = {
	deployment: string;
	github: string;
	refactorNotes?: string;
	img: string;
	title: string;
	subtitle: string;
	desc: string[];
};

const PROJECTS: Project[] = [
	{
		deployment: 'https://rreeves-todo-list.herokuapp.com/',
		github: 'https://github.com/rreeves1996/todo-list',
		img: TODO_LIST,
		title: 'To-Do List',
		subtitle: 'React, TypeScript, Bootstrap, Node',
		desc: [
			`My own take on a simple to-do list app! Featuring daily to-do lists for two weeks, and another tab for miscellaneous to-dos.`,
			`I created this app because I hadn't created a to-do list app yet, and thought I would try tackling it on my own with React. I also wanted to try to create a UI that was sleek, clean, and responsive, but also fast and easy to build. This app gave me the opportunity at creating said UI using bootstrap.`,
			`Overall, I am happy with how sleek it turned out, UI wise and coding wise. I had enough learning under my belt at this point, especially with React, to make this app pretty easy to tackle functionally. The UI is sleek and was able to be created in a short time-frame. I'm happy with how I was able to reach my goals with this app's creation!`,
		],
	},
	{
		deployment: 'https://vercel.com/rreeves1996/virtual-keyboard',
		github: 'https://github.com/rreeves1996/virtual-keyboard',
		refactorNotes:
			'https://github.com/rreeves1996/virtual-keyboard#refactor-notes',
		img: VIRTUAL_KEYBOARD,
		title: 'Virtual Keyboard',
		subtitle: 'React, TypeScript, SASS, Node',
		desc: [
			'This is a virtual keyboard app, created with React. The user can type with the keyboard on the screen (or their own keyboard) and the text will display in the text box. Pretty simple!',
			`Coming out of boot camp, I was eager to try to tackle creating something entirely on my own, and I was eager to learn more about React. I ended up looking for simple app ideas to find one I could find and create that was easy/simple enough for me to create fresh out of boot camp, but hard enough to challenge me in certain aspects and give me some sort of growth, if not the experience creating the app itself.`,
			`Four months after its creation, I decided to give the app a refactor. The code was a mess and, although it functioned properly, was not following commonpractice for the most part. I had also made my life so much more difficult than it needed to be in a lot of areas - much of my contrived, massive functions or workarounds were easily solved with few lines of code.`,
			`I took full notes on the refactor and added them to the README - to read the full notes, click the 'Refactor' button! I'm very happy with how the cleanup turned out, and refactoring my old code was a valuable experience.`,
		],
	},
	{
		deployment: 'https://survey-app-silk.vercel.app/',
		github: 'https://github.com/rreeves1996/survey-app',
		img: SURVEYFRIEND,
		title: 'surveyFriend',
		subtitle:
			'Next.js, React, TypeScript, Tailwind CSS, tRPC, Prisma, PostgreSQL',
		desc: [
			`My second full-stack project created on my own, this simple survey app, surveyFriend, allows users to login, create/manage surveys, take surveys, and view survey results in an intuitive, easy to navigate UI.`,
			`This app was created using the T3 Stack (Next.js, Tailwind CSS, TypeScript, tRPC, Prisma) and utilizes PostgreSQL on a Supabase server for the backend. With this app, I was able to efficiently create a sleek and responsive UI using Tailwind CSS, which allowed me to focus most of my time on the actual funcionality of the app.`,
			`surveyFriend uses OAuth 2 for login, allowing the user to sign in through GitHub, Discord, or Google providers. A unique (yes, this is a pun) problem I faced while making this app was signing in to different providers when accounts had the same email. I would attempt to login through GitHub, only to end up logged into my GitHub account.`,
			`The problem had to do with unique identifiers. I realized that the Prisma default schema used the users' email as the unique identifier after clearing the users from my database and noting my GitHub login now functioned correctly. Had I known the email was the unique identifier on the User model, I would've changed it ages ago, as this can present many problems. I changed the unique identifier to the id, and all of the problems were solved. This taught me that I shouldn't put so much blind trust into the default generated schemas, ESPECIALLY when using Prisma with OAuth 2.`,
		],
	},

	{
		deployment: 'https://teamez.herokuapp.com/',
		github: 'https://github.com/rreeves1996/team-manager',
		img: TEAMEZ,
		title: 'TeamEZ',
		subtitle: 'React, TypeScript, Redux, SASS, MySQL, Node, Express',
		desc: [
			`TeamEZ is a full-stack app that I created on my own following my boot camp graduation. I wanted to create a full-stack app from scratch that utilized the MERN stack, so I took inspiration from a command-line employee tracker I made in boot camp, expanded on it and its features, and created a full-stack version with my own front-end/UI. It allows the user easily keep track of employees and employee info and features a fully functional login/registration system created with JWT.`,
			`Creating this app was a massive leap forward in my learning. Though the MERN stack is often-used, I used it with MySQL, and creating it from scratch proved to be difficult. However, having to look up and learn everything I needed for the app gave me a great understanding in how a lot of fundamenetal technologies and methods are used!`,
		],
	},
	{
		deployment: 'https://weather-gsepxpyo4-rreeves1996.vercel.app/',
		github: 'https://github.com/rreeves1996/weather-api',
		img: WEATHER_API,
		title: 'Weather Dashboard',
		subtitle: 'React, TypeScript, SASS, Node',
		desc: [
			`A simple weather app that I created on my own with React after my boot camp graduation.`,
			`I created a weather app early on in my bootcamp with plain JavaScript, so I was interested to see how creating one on my own would go after learning a lot more, and learning React. I wanted a sleek UI that was easy to interact with but also nice to look at.`,
			`I was able to learn a lot about keeping my code condensed and simple in this app, as most of the functionality could be accomplished with fewer lines of code, and it felt important to me to try and keep the complexity down. I am overall happy with what came of the app, and feel like I hit all of my goals I set out to accomplish before its creation!`,
		],
	},
];

export default function Portfolio() {
	const [currentSlide, setCurrentSlide] = useState<number>(2);

	const handleChangeSlide = (slide: number) => {
		setCurrentSlide((prevState) => slide);
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
					<a
						href={`${PROJECTS[currentSlide].deployment}`}
						target='_blank'
						aria-label='deployment link'>
						<button>Deployment</button>
					</a>

					<div className='divider' />

					<a
						href={`${PROJECTS[currentSlide].github}`}
						target='_blank'
						aria-label='repository link'>
						<button>Repository</button>
					</a>

					{PROJECTS[currentSlide].refactorNotes && (
						<>
							<div className='divider' />

							<a
								href={`${PROJECTS[currentSlide].refactorNotes!}`}
								target='_blank'
								aria-label='refactor link'>
								<button>Refactor</button>
							</a>
						</>
					)}
				</div>

				{PROJECTS[currentSlide].desc.map((p) => (
					<p className='project-desc'>{p}</p>
				))}
			</section>
		</section>
	);
}
