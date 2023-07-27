import React, { useState, useRef } from 'react';
import { HiMail } from 'react-icons/hi';
import { VscGithubInverted } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import ScrollIntoView from 'react-scroll-into-view';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);
	const [displayed, setDisplayed] = useState<boolean>(false);
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [formState, setFormState] = useState({
		user_name: '',
		user_email: '',
		message: '',
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_cydu9t9',
				'template_mdpyund',
				form.current!,
				'9JiUIKxGScSLAmNrE'
			)
			.then(
				(res) => {
					setSubmitted(true);
					setDisplayed(false);
				},
				(err) => {
					window.alert(err.text);
				}
			);
	};

	return (
		<section className='contact page'>
			<section className='title'>
				<h2>Contact</h2>

				<ScrollIntoView selector='.contact'>
					<button>
						<HiMail />
					</button>
				</ScrollIntoView>
			</section>

			<header>
				<section className='left-side'>
					<div className='picture-and-social-container'>
						<img
							src='https://avatars.githubusercontent.com/u/102436216?v=4'
							alt='contact-portrait'
							className='contact-picture'
						/>

						<div className='contact-button-container'>
							<ScrollIntoView selector='.form-container'>
								<button
									className='social-button'
									aria-role='toggle form display'
									onClick={() => setDisplayed(!displayed)}>
									<HiMail />
								</button>
							</ScrollIntoView>

							<a
								href='https://github.com/rreeves1996'
								target='_blank'
								aria-role='github link'>
								<button className='social-button github-button'>
									<VscGithubInverted />
								</button>
							</a>

							<a
								href='https://www.linkedin.com/in/rreevesdev/'
								target='_blank'
								aria-role='linkedin link'>
								<button className='social-button'>
									<FaLinkedinIn />
								</button>
							</a>
						</div>
					</div>

					<div className='text-box'>
						<h2>Ryan Reeves</h2>
						<h5>Web Developer</h5>
					</div>
				</section>

				<section className='right-side'>
					<p>
						<strong>Location:</strong> Bothell, WA
					</p>

					<p>
						<strong>Timezone:</strong> Pacific Standard Time (GMT -7:00)
					</p>

					<p>
						<strong>Phone:</strong> (425) 418-3963
					</p>

					<p>
						<strong>Preferred contact:</strong> rreeves.dev@gmail.com
					</p>

					<p style={{ marginTop: '.5rem', textIndent: '1rem' }}>
						I am currently interested in both freelance opportunities (front-end
						& full-stack) and full-time/contract front-end developer positions.
					</p>

					<p style={{ textIndent: '1rem' }}>
						Please do not hesitate to contact me if you think I'd be a good fit
						for your project or your team! I work best with optimistic,
						enthusiastic teammates that are always pushing themselves to learn
						more and help others.
					</p>

					<h4 style={{ marginTop: '1rem', textIndent: '2rem' }}>
						I'm eager to chat with you. :)
					</h4>
				</section>
			</header>

			<form
				className={displayed ? 'form-container' : 'form-container hidden'}
				ref={form}
				onSubmit={sendEmail}>
				<div className='name-email'>
					<div className='field name-field'>
						<label className='label' htmlFor='user_name'>
							Name:
						</label>

						<div className='control'>
							<input
								className='input'
								type='text'
								name='user_name'
								placeholder='Your name'
								aria-role='name input'
								aria-required={true}
								value={formState.user_name}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className='field email-field'>
						<label className='label' htmlFor='user_email'>
							Email:
						</label>

						<div className='control'>
							<input
								className='input'
								type='email'
								name='user_email'
								placeholder='Your email'
								aria-role='email input'
								aria-required={true}
								value={formState.user_email}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className='field body-field'>
					<label className='label' htmlFor='message'>
						Message:
					</label>

					<div className='control'>
						<textarea
							id='message-box'
							className='message-box'
							autoComplete='off'
							placeholder='Be nice...'
							name='message'
							aria-role='message text area'
							aria-required={true}
						/>
					</div>
				</div>

				<button
					type='submit'
					className='submit-btn'
					value='Send'
					aria-role='submit button'
					aria-required={true}>
					Submit
				</button>
			</form>

			<div
				className={
					submitted
						? 'submit-confirm-container'
						: 'submit-confirm-container hidden'
				}>
				<BsCheckCircleFill className='checkmark' />
				<h3>Submitted</h3>
			</div>
		</section>
	);
}
