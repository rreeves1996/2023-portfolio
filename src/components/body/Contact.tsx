import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { VscGithubInverted } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

export default function Contact() {
	const [displayed, setDisplayed] = useState(false);
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = (event: any) => {
		event.preventDefault();

		window.location.reload();
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
							<button
								className='social-button'
								aria-role='toggle form display'
								onClick={() => setDisplayed(!displayed)}>
								<HiMail />
							</button>

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
				onSubmit={handleFormSubmit}>
				<div className='name-email'>
					<div className='field name-field'>
						<label className='label' htmlFor='name'>
							Name:
						</label>

						<div className='control'>
							<input
								className='input'
								type='text'
								name='name'
								placeholder='Your name'
								aria-role='name input'
								aria-required={true}
								value={formState.name}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className='field email-field'>
						<label className='label' htmlFor='email'>
							Email:
						</label>

						<div className='control'>
							<input
								className='input'
								type='email'
								name='email'
								placeholder='Your email'
								aria-role='email input'
								aria-required={true}
								value={formState.email}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className='subject'>
					<div className='field subject-field'>
						<label className='label' htmlFor='subject'>
							Subject:
						</label>

						<div className='control'>
							<input
								className='input'
								type='text'
								name='subject'
								placeholder='Subject'
								aria-role='subject input'
								aria-required={true}
								value={formState.subject}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className='field body-field'>
					<label className='label' htmlFor='message-box'>
						Message:
					</label>

					<div className='control'>
						<textarea
							id='message-box'
							className='message-box'
							autoComplete='off'
							placeholder='Be nice...'
							name='message-box'
							aria-role='message text area'
							aria-required={true}
						/>
					</div>
				</div>

				<button
					type='submit'
					className='submit-btn'
					aria-role='submit button'
					aria-required={true}>
					Submit
				</button>
			</form>
		</section>
	);
}
