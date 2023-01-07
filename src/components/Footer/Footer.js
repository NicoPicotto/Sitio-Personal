import React from 'react';
import { SiReact } from 'react-icons/si';
import Fade from 'react-reveal/Fade';
import './Footer.css';

const Footer = () => {
	return (
		<Fade bottom>
			<div className='footerContainer'>
				<h3 className='footerText'>
					{' '}
					Created with ReactJs <SiReact color='#5777F7' /> Thanks for visiting!
				</h3>
			</div>
		</Fade>
	);
};

export default Footer;
