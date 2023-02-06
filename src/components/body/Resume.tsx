import React from 'react';
import RESUME from '../../assets/resume.pdf';

export default function Resume() {
	return (
		<object
			className='resume'
			data={RESUME}
			type='application/pdf'
			width='100%'
		/>
	);
}
