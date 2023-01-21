import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import ScrollIntoView from 'react-scroll-into-view';

export default function Contact() {
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
				<h2>Say hi. :)</h2>
			</header>
			<form className='form-container' onSubmit={handleFormSubmit}>
				<div className='name-email'>
					<div className='field name-field'>
						<label className='label'>Name:</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								name='name'
								placeholder='Your name'
								value={formState.name}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='field email-field'>
						<label className='label'>Email:</label>
						<div className='control'>
							<input
								className='input'
								type='email'
								name='email'
								placeholder='Your email'
								value={formState.email}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className='subject'>
					<div className='field subject-field'>
						<label className='label'>Subject:</label>
						<div className='control'>
							<input
								className='input'
								type='text'
								name='subject'
								placeholder='Subject'
								value={formState.subject}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<div className='field body-field'>
					<label className='label'>Message:</label>

					<div className='control'>
						<textarea
							id='message-box'
							className='message-box'
							autoComplete='off'
							placeholder='Be nice...'
						/>
					</div>
				</div>
			</form>
		</section>
	);
}
