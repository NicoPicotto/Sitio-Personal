import React from 'react';
import './Mail.css';

const Mail = () => {
	return (
		<div className='mailContainer'>
			<a href='mailto:picottonico@gmail.com' className='mailTo'>
				<h4 className='mail'>picottonico@gmail.com</h4>
			</a>
		</div>
	);
};

export default Mail;
